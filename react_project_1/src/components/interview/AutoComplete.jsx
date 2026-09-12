import { useEffect, useState } from "react";
const countries = [
    "India", "Indonesia", "Ireland", "Iceland", "Australia", "Austria",
    "Argentina", "Brazil", "Belgium", "Canada", "China", "Chile",
    "Denmark", "Egypt", "France", "Germany", "Greece", "Japan",
    "Mexico", "Nepal", "Netherlands", "Singapore", "South Africa",
    "Spain", "United Kingdom", "United States"
];
export default function Autocomplete() {
    const [search, setSearch] = useState(""), [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() =>
            setSuggestions(search ? countries.filter(c =>
                c.toLowerCase().includes(search.toLowerCase())) : []), 500);
        return () => clearTimeout(timer);
    }, [search]);
    return (
        <div className="w-50 mx-auto mt-5">
            <input className="form-control" placeholder="Search country..."
                value={search} onChange={e => setSearch(e.target.value)} />
            {suggestions.length > 0 && <ul className="list-group">
                {suggestions.map(country =>
                    <li key={country} className="list-group-item"
                        onClick={() => { setSearch(country); setSuggestions([]); }}>
                        {country}
                    </li>
                )}
            </ul>}
        </div>
    );
}