import React, { useState } from 'react';
import axios from 'axios';
import useFetch from '../hooks/UseFetch';

export default function PhotoList() {
    // const [photoArr, setPhotoArr] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    //     setPhotoArr(response.data);
    // }
    let photoArr = useFetch("https://jsonplaceholder.typicode.com/photos")

    return <>
        <h3 className='text-center'>photo List</h3>
        {/* <button className="btn btn-primary" onClick={fetchPhotos}>Fetch photos</button> */}

        <table className="table table-bordered table-striped">
            <tbody>
                {photoArr.map(comment => {
                    return <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.title}</td>
                        <td>{comment.url}</td>
                        <td>{comment.thumbnailUrl}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
