export default function Filter({ value, name, onChange }) {
  return (
    <div>
      <input type="checkbox" name={name} value={name} checked={value} onChange={onChange}/>
      {name}
    </div>
  );
}
