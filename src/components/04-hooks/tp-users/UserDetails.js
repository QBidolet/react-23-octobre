import React from "react";

function UserDetails({user}){
    return (
        <div>
            <h2>Détails de l'utilisateur</h2>
            <p>Nom : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Téléphone : {user.phone}</p>
        </div>
    )
}

export default UserDetails;