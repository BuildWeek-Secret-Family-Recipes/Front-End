import React, { useState, useEffect } from "react";
import AxiosWithAuth from '../../utils/api';
import RecipeCard from "../recipe/RecipeCard";
import { CardHolder } from'../pages/Home';
import styled from 'styled-components';
import { device, device_max } from'../layout/Breakpoints';


const FormDiv = styled.form`
    margin: 3rem auto;
    border: 1px solid black;
    border-radius: .5rem;
    padding: 1rem;
    width: 85%;
    background: #d2bba0;

    @media ${device.mobileS}{
      width: 90%;
    }

    @media ${device.tablet}{
      width: 80%;
    }

    @media ${device.desktopS}{
      width: 70%;
    }

    @media ${device.desktop}{
      width: 60%;
    }

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
    margin-left: 200px;
    text-align: center;


    @media ${device.mobileS}{
      width: 90%;
      margin-left: 15px;
    }

    @media ${device.tablet}{
      width: 80%;
      margin-left: 70px;
    }

    
    @media ${device.laptop}{
      width: 65%;
      margin-left: 155px;
    }

    @media ${device.laptopL}{
      width: 55%;
      margin-left: 250px;
    }

    
    @media ${device.desktopS}{
      width: 50%;
      margin-left: 275px;
    }

    @media ${device.desktop}{
      width: 50%;
      margin-left: 275px;
    }


    @media ${device.desktopL}{
      width: 55%;
      margin-left: 365x;
    }


    @media ${device.desktopXL}{
      width: 55%;
      margin-left: 335px;
    }

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
      .get(`/api/auth/recipes/`)
      .then(response =>{
          // console.log(response.data)
         setData(response.data.filter(ind => ind.name.toLowerCase().includes(query.toLowerCase())
         ))
});
}, [query]);
       
  
  
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
