import style from "./Item.module.css";

export default function Item({ item }) {
  return (
    <>
      <div className={style.item}>
        <img className={style.img} src={item.imgUrl} alt="" />
        <div className={style.imformation}>
          <h1>{item.name}</h1>
          <p className={style.description}>{item.description}</p>
          <div>Color: {item.color}</div>
          <div className={style.price}>Price: {item.price}</div>
          <div>Rating: {item.rating}</div>
        </div>
      </div>
    </>
  );
}
