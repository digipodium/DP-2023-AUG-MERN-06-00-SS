import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StateManagement = () => {

    let likes = 59;

    const [comment, setComment] = useState(0);

    const [share, setShare] = useState(0);

    const [width, setWidth] = useState(100);

    const [imageLink, setImageLink] = useState("");

    const addLike = () => {
        likes++;
        console.log(likes);
    }

    const addComment = () => {
        setComment(comment + 1);
        console.log(comment);
    }

    const addShare = () => {
        setShare(share + 1);
    }

    return (
        <motion.div
            className='bg-body-secondary vh-100'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, damping: 20, stiffness: 100 }}
        >
            <div className='container'>
                <h1>State Management</h1>
                <hr />

                <button className='btn btn-primary' onClick={addLike} >{likes} Add Like</button>
                <button className='btn btn-danger' onClick={addComment} >{comment} Add Comment</button>
                <button className='btn btn-success' onClick={addShare} >{share} Add Share</button>

                <img width={width} src="https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false" alt="" />

                <input
                    className='form-range'
                    type="range"
                    min="0"
                    max="1000"
                    onChange={(e) => { setWidth(e.target.value) }} />

                <h3>Insert Image Link Here</h3>
                <input type="text" className='form-control' onChange={e => setImageLink(e.target.value)} />
                <img src={imageLink} width={width} alt="" />
            </div>
        </motion.div>
    )
}

export default StateManagement;