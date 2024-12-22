import Sort from "../Sort/Sort";
import { SORTS} from "../sorts";
import style from "./Sorts.module.css";

export default function Sorts({activeSort, setActiveSort}) {
  return (
      <div className={style.sortsBtns}>
        {Object.values(SORTS).map((sort) => (
          <Sort
            key={sort.name}
            name={sort.name}
            value={activeSort.name === sort.name}
            onClick={() => setActiveSort(sort)}
          />
        ))}
      </div>
  );
}
