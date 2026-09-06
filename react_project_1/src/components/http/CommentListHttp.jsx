import client from '../../utils/client'
import React, { useEffect, useState } from 'react'

export default function CommentListHttp() {
    const [commentArr, setCommentArr] = useState([]);

    const fetchComments = async () => {
        try {
            const response = await client.get('/comments');
            setCommentArr(response.data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        console.log(commentArr)
    })

    return <>
        <h3>Comment List Http</h3>
        <button onClick={fetchComments}>fetch comments</button>

        <table className="table table-bordered table-striped">
            <tbody>
                {commentArr.map(comment => {
                    return <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
