import Item from "../Item/Item";
import style from "./ItemList.module.css"

export default function ItemList({ items }) {
  return (
    <>
      <div className={style.list}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
