import React, {useState} from "react";

function NewPostForm({userId}){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title,
            body,
            userId
        }

        fetch("https://jsonplaceholder.typicode.com/posts", 
        {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("Nouvelle publication crée : ", data)
            setTitle('');
            setBody('');
            
        })
    }

    return (
        <div>
            <h2>Ajouter une nouvelle publication</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titre:</label>
                <input 
                type="text" 
                id="title" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="body">Contenu:</label>
                <textarea 
                type="text"
                id="body"
                value={body}
                onChange={(e)=>setBody(e.target.value)}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default NewPostForm;