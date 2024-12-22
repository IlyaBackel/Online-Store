import { useState } from "react";
import Filter from "../Filter/Filter";
import style from "./FilterList.module.css";
import { COLORS } from "../arrays";

export default function FiltersList({ colors, setColors }) {
  const handleCheck = (color) => {
    if (colors.includes(color)) {
      setColors(colors.filter((c) => c != color))
      return;
    }

    setColors([...colors, color]);
  }

  return (
    <div className={style.filtersList}>
      {Object.values(COLORS).map((color, index) => (
        <Filter
          key={index}
          value={colors.includes(color)}
          name={color}
          onChange={() => handleCheck(color)}
        />
      ))}
    </div>
  );
}
