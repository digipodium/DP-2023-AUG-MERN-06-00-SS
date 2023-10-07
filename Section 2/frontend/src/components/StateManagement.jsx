import React, { useState } from 'react'

const StateManagement = () => {

    let likes = 59;

    const [comment, setComment] = useState(0);

    const addLike = () => {
        likes++;
        console.log(likes);
    }

    const addComment = () => {
        setComment(comment + 1);
        console.log(comment);
    }

    return (
        <div>
            <div className='container'>
                <h1>State Management</h1>
                <hr />

                <button className='btn btn-primary' onClick={addLike} >{likes} Add Like</button>
                <button className='btn btn-danger' onClick={addComment} >{comment} Add Comment</button>


            </div>
        </div>
    )
}

export default StateManagement;