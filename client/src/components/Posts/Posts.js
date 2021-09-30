import React from 'react';
import { useSelector } from 'react-redux';


function Posts() {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    
    return (
        <div>
            <h3>This is POSTS</h3> 
        </div>
    )
}

export default Posts
