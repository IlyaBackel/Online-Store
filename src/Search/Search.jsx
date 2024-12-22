export default function Search({ search, onChange }) {
    return(
        <input type="text" placeholder="Search" value={search} onChange={onChange}/>
    )
}