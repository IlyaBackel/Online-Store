import { useEffect, useMemo, useState } from "react";
import ItemList from "../Itemlist/ItemList";
import { generateItems } from "../generateItems";
import Sorts from "../Sorts/Sorts";
import { SORTS } from "../sorts";
import FiltersList from "../FiltersList/FiltersList";
import style from "./App.module.css";
import Search from "../Search/Search";
import { FILTERS } from "../filters";

export default function App() {
  const [filters, setFilters] = useState(FILTERS);

  const [items, setItems] = useState(generateItems);
  const [sort, setSort] = useState(SORTS.popular);

  const filterFn = (item) =>
    Object.values(filters).every(({ value, func }) => func(item, value));

  const handleSearch = (event) => {
    setFilters((prev) => ({
      ...prev,
      search: {
        ...prev.search,
        value: event.target.value,
      },
    }));
  };

  const setColors = (colors) => {
    setFilters((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        value: colors,
      },
    }));
  }

  return (
    <div className={style.mainContainer}>
      <Search search={filters.search.value} onChange={handleSearch} />
      <div className={style.container}>
        <div className={style.filters_sorts}>
          <div className={style.filters}>
            <FiltersList
              colors={filters.colors.value}
              setColors={setColors}
            />
          </div>
          <div>
            <Sorts activeSort={sort} setActiveSort={setSort} />
            <ItemList items={items.filter(filterFn).sort(sort.func)} />
          </div>
        </div>
      </div>
    </div>
  );
}
