import React, {useState, useEffect } from 'react';

function UserPosts({userId}){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response)=>response.json())
        .then((data)=>{
            setPosts(data);
        });
    }, [userId])

    return (
        <div>
            <h2>Publications</h2>
            <ul>
                {posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        </div>
    )
}

export default UserPosts;