import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRecipe, deleteRecipe } from '../../actions/recipes';
import styled from "styled-components"
import { device } from '../layout/Breakpoints.js';

function UserRecipeCard(props) {

    useEffect(() => {
        props.getUserRecipe(props.recipe)
    }, [])

    // const Card = styled.div`
    //     height: 300px;
    //     width: 250px;
    //     background-color: #C4C4C4;
    //     margin-bottom: 2rem;

    //     @media ${device.mobileS} {
    //         width: 50%;
    //         margin-left: 5%;

    //     }

    //     @media ${device.tablet}{
    //         width: 45%;
    //     }

    //     @media ${device.laptop}{
    //         width: 35%;
    //     }


    //     @media ${device.laptopL}{
    //         width: 22%;
    //         height: 350px;
    //         margin-left: 0;
    //     }


    //     @media ${device.desktop}{
    //         width: 22%;
    //         height: 400px;
    //     }

    //     @media ${device.desktopL}{
    //         width: 20%;
    //         height: 440px;
    //         margin-left: 1%;
    //         margin-right: 1%;
    //     }`

    const Header = styled.h2`
        font-size: 25px;
        // text-shadow: 2px 2px BlueViolet;`

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteRecipe(props.recipe);
    }

  return(
      <div className="card">
            <div className="header">
                <div className="icon">
                    <a href="#">
                        <i className="fa fa-heart-o"></i>
                    </a>
                </div>
            </div>
            <div className="text">
                <Link to='/api/auth/recipes/:id'>Edit Recipe</Link>
                <h4 className="food">
                Name: {props.name};
                </h4>
        
                <i className="fa fa-clock-o">15 Mins</i>
                <i className="fa fa-users">Serves 2</i>
        
            {/* <div class="stars">
                    <li>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star"></i></a>
                        <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                </div> */}
                <p className="info">Type of Meal: {props.type}</p>
                <p className="author">Original Author: {props.author}</p>
        <a href="#" className="btn">Let's Cook!</a>
        </div>

        <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
  )
}

const mapStateToProps = ({ recipeReducer }) => ({
    recipe: recipeReducer.recipe
})

export default connect(mapStateToProps, { getUserRecipe, deleteRecipe })(UserRecipeCard);