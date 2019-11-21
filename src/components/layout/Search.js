import React, { useState, useEffect } from "react";
import RecipeCard from '../recipe/RecipeCard';
import AxiosWithAuth from '../../utils/api';
import {Link} from "react-router-dom";
// import styled from "styled-components";

// const Search = () => {
//     return (
//         <div>
//             <form>
//                 <input 
//                     type='text'
//                     name='search'
//                     placeholder='Search...'
//                 />
                
//                 <button type='submit'>Search</button>
//             </form>
//         </div>
//     )
// }

// export default Search

export default function SearchForm() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
  

useEffect(() =>{
    AxiosWithAuth()
    .get(`/auth/recipes/`)
    .then(response =>{
        console.log(response.data)
        const Recipes = response.data.results.filter(ind => RecipeCard.name.toLowerCase().includes(query.toLowerCase()))
        setData(Recipes);
    })
    .catch(error => {
        console.log("recipes were not returned", error);
    });
}, [query])
  
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div >
      <form > 
        <input
        id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>
  
  
  
      <Link to="/"><button>Home
            </button></Link>
      </form>
  
      {data.map((char => {
    return(<RecipeCard key={char.id} name={char.name} species ={char.species} status={char.status}/>)
  }
  ))}
  
  </div>
  )}
  