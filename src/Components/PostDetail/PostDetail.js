import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate (`/friend/&(userID)`)
    }
    return (
        <div>
            <h2>Details about post:{id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default PostDetail;