import React, { useState, useEffect } from "react";
import AxiosWithAuth from '../../utils/api';
import RecipeCard from "../recipe/RecipeCard";
import { CardHolder } from'../pages/Home';
import styled from 'styled-components';



const FormDiv = styled.form`
    margin: 3rem auto;
    border: 1px solid black;
    border-radius: .5rem;
    padding: 1rem;
    width: 85%;
    background: #d2bba0;
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    
  

    
`  

const Name = styled.input`
    margin-top: .5rem;
    height: 2rem;
    width: 50%;
    justify-content: center;
    align-content: center;
    margin-left: 280px;
    text-align: center;
`

const SubmitButton = styled.button`
    margin-top: 2rem;
    height: 2rem;
    width: 10rem;
    border-radius: .3rem;
    background: #f2ffe0;
    :hover {
        cursor: pointer;
        background: #9f7e69;
        color: #f2ffe0;
    }
`

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
    <FormDiv>

      <form className="searching"> 
        <ColumnWrapper>
        <Name
        id="name" type="text" name="textfield" placeholder="Looking for something?" value={query} onChange={handleInputChange}/>
        </ColumnWrapper>
  
        <SubmitButton type='submit'>Search</SubmitButton>
     
      </form>
      <CardHolder>
      {data.map((ind=> {
    return(<RecipeCard name={ind.name} type_of_meal={ind.type_of_meal} original_author={ind.original_author}/>)
  }
  ))}
      </CardHolder>
  </FormDiv>
  )}
