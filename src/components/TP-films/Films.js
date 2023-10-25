import React, {useContext, useState} from "react";
import Film from "./Film";
import { FilmContext } from "./FilmContext";

function Films(){
    const {films, handleVote} = useContext(FilmContext);

    return (
        <div>
            {films.map((film, index)=>
                <Film 
                key={index}
                title={film.title}
                votes={film.votes}
                handleVote={()=>handleVote(index)}/>
                )          
            }
        </div>
    )
}

export default Films;