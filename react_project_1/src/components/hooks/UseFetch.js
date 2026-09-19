import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {  // Custom Hook
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return data;
}