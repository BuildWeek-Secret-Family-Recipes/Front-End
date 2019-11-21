import React, { useState, useEffect } from "react";
import RecipeCards from '../recipe/RecipeCards';
import AxiosWithAuth from '../../utils/api';
// import {Link} from "react-router-dom";
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
        // setRecipes(response.data);
        const Recipes = response.data.filter(ind => RecipeCards.name.toLowerCase().includes(query.toLowerCase()))
        setData(Recipes);
    })
    .catch(error => {
        // console.log("recipes were not returned", error);
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
         <button type='submit'>Search</button>
      </form>
  
      {data.map((ind => {
    return(<RecipeCards name={ind.name} type of meal={ind.type_of_meal} original author ={ind.original_author} />)
  }
  ))}
  
  </div>
  )}
  