import style from "./Sort.module.css";

export default function Sort({ name, value, onClick }) {

  return (
    <button 
      className={`${style.sort_btn} ${value ? style.sort_btn_active : ''}`} 
      onClick={onClick}
    >
      {name} first
    </button>
  );
}