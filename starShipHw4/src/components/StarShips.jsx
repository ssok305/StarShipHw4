import { useState, useEffect } from "react";
export default function StarShips(){
    const [starships, setStarShips]= useState([]);
    async function getShips(){
      
        const reponse = await fetch("https://swapi.dev/api/starships/");
        const data = await reponse.json()
        console.log(data.results)
        return data.results.map((name) => {
            return setStarShips(ships => [...ships,name])
        })


    }
    // arr = getShips("https://swapi.dev/api/starships/");
    useEffect(() =>{
       getShips();
    }, [])
    // console.log(starships)
    return(
        <div className="container">
            {starships.map((star) => {
                return(<div key = {star.name}>{star.name}</div>)
            })}


        </div>
    )
}

