import React, { useState, useEffect } from "react";
// import axios from "axios";
// import RecipeCards from '../recipe/RecipeCards';
import AxiosWithAuth from '../../utils/api';
import RecipeCard from "../recipe/RecipeCard";
// import styled from "styled-components";
// import CharacterCard from "./CharacterCard";
// import {Link} from "react-router-dom";

export default function SearchForm() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() =>{
            AxiosWithAuth()
            .get(`/auth/recipes/`)
            .then(response =>{
                // console.log(response.data)
                const Recipe = response.data.filter(ind => ind.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setData (Recipe);
  });
},[query]);
                
       
  
  
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
  
      {data.map((ind=> {
    return(<RecipeCard name={ind.name} type of meal={ind.type_of_meal} original author={ind.original_author}/>)
  }
  ))}
  
  </div>
  )}
  



  // import React, { useState, useEffect } from "react";
// import RecipeCards from '../recipe/RecipeCards';
// import AxiosWithAuth from '../../utils/api';
// import { Form, Field, withFormik } from 'formik';
// import { Button } from 'reactstrap';
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

// export default 
// function SearchForm() {

//     const [recipe, setRecipe] = useState([]);
//     // const [query, setQuery] = useState("");
//     const [data, setData] = useState([])
//     const [filteredRecipes, setFilteredRecipes] = useState([]);

//     useEffect(() =>{
//         AxiosWithAuth()
//         .get(`/auth/recipes/`)
//         .then(response =>{
//             console.log(response.data)
//             // setRecipes(response.data);
//             const recipe = response.data.filter(ind => RecipeCards.name.toLowerCase())
//             setRecipe(recipe);
//         })
//         .catch(error => {
//             // console.log("recipes were not returned", error);
//         });
//     }, [data])
      

//             function handleChange(e) {
//                 const newRecipes = recipe.filter((data) => { 
//                   console.log(recipe, "Item")
//                  return data.RecipeCards.toLowerCase().includes(e.target.value)
//                 })
//                 setFilteredRecipes(newRecipes);
//               }
//               function handleSubmit(props) {
//                       setData (data);
//               }
            
//               // const handleInputChange = event => {
//               //       setQuery(event.target.value);
//               //     };



//               return (
//                 <>
//                     <Form className="searchform">
//                         <Field type="text" name="search" placeholder="Search..." className="search-field" onChange={handleChange} />
//                         <Button  onSubmit={handleSubmit}>Search</Button>
//                     </Form>
//                     {filteredRecipes.map((data) => (<p className="searchitems">{data.RecipeCards}</p>))}
//                     </>
//                 );
//               }
//             export default withFormik({
//                 myPropsToValues: (values) => {
//                     return {
//                         search: values.search || ''
//                     }
//                 }
//             })(SearchForm)



// //     const [data, setData] = useState([]);
// //     const [query, setQuery] = useState("");
    

// // useEffect(() =>{
// //     AxiosWithAuth()
// //     .get(`/auth/recipes/`)
// //     .then(response =>{
// //         console.log(response.data)
// //         // setRecipes(response.data);
// //         const Recipes = response.data.filter(ind => RecipeCards.name.toLowerCase().includes(query.toLowerCase()))
// //         setData(Recipes);
// //     })
// //     .catch(error => {
// //         // console.log("recipes were not returned", error);
// //     });
// // }, [query])
  
  
// //   const handleInputChange = event => {
// //     setQuery(event.target.value);
// //   };
// //   return (
// //     <div >
// //       <form > 
// //         <input
// //         id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>
// //          <button type='submit'>Search</button>
// //       </form>
  
// //       {data.map((ind => {
// //     return(<RecipeCards name={ind.name} type of meal={ind.type_of_meal} original author ={ind.original_author} />)
// //   }
// //   ))}
  
// //   </div>
// //   )}