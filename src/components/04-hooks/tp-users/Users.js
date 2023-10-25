import React, { useState, useEffect } from 'react';
import UsersList from './UserList';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import NewPostForm from './NewPostForm';

function Users(){
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();

    useEffect(()=>{
        // fetch l'API
        // pour remplir users
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data);
        });
    }, [])

    useEffect(()=>{
        console.log(users);
    }, [users])
    
    return (
        <div>
        <UsersList users={users} onSelectUser={setSelectedUser}></UsersList>
        {selectedUser &&
        <>
            <UserDetails user={selectedUser}/>
            <UserPosts userId={selectedUser.id}/>
            <NewPostForm userId={selectedUser.id}/>
        </>
        }
        </div>
    )
}
export default Users;