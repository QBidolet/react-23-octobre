import React from 'react';

function UsersList({users, onSelectUser}){
    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <ul>
                {users && users.map((user) => 
                    <li key={user.id} onClick={()=>onSelectUser(user)}>
                        {user.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default UsersList;