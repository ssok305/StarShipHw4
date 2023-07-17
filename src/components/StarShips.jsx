import { useState, useEffect } from "react";
export default function StarShips(){
    const [starships, setStarShips]= useState([]);
    async function getShips(){
      
        const reponse = await fetch("https://swapi.dev/api/starships/");
        const data = await reponse.json()
        const [starships, setStarships] = useState([]);

        useEffect(() => {
          getAllStarships()
            .then(response => {
              setStarships(response.data.results);
            })
            .catch(error => {
              console.log('Error fetching starships:', error);
            });
        }, []);
    // console.log(starships)
    return(
        <div className="container">
            {starships.map((star) => {
                return(<div key = {star.name}>{star.name}</div>)
            })}


        </div>
    )
}
}

