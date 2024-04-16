import './Search.css';

interface Props {
    search: string
    setSearch: (query: string) => void
}

function Search({search, setSearch}: Props) {
    return (
        <input type='text' className='search-bar' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
    )
}

export default Search