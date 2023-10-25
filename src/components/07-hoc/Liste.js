import React from "react";
import withData from "./withData";

const Liste = ({data}) => {
    return (
        <ul>
            {data.map((item)=><li key={item.id}>{item.title}</li>)}
        </ul>
    )
}

export default withData(Liste, "https://jsonplaceholder.typicode.com/posts");