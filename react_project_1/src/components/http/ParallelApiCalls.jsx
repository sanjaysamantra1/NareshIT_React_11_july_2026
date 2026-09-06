import axios from 'axios';

export default function ParallelApiCalls() {

    const fetchDataFromMultipleAPI = async () => {
        const promise1 = axios.get("https://api.github.com/users/defunkt");
        const promise2 = axios.get("https://api.github.com/users/evanphx");
        const promise3 = axios.get("https://api.github.com/users/sanjaysamantra1");
        const responseArr = await axios.all([promise1, promise2, promise3]);
        let responseData = responseArr.map((response) => response.data);
        console.log(responseData);
    }

    return <>
        <div>ParallelApiCalls</div>
        <button onClick={fetchDataFromMultipleAPI}>Fetch data</button>
    </>
}
