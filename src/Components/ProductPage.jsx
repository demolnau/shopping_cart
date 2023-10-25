/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
//import { useState } from "react";
import "../styles/ProductPage.styles.css"

const ProductPage= function({item, increaseCount, decreaseCount}){
  const navigate =useNavigate()
  return (
    <div className="profilePage">
        <NavigationBar></NavigationBar>
        <div className="itemContainer">
    
        <div className="itemImageContainer">
            <img src={item.image} alt={item.name} className="itemImage" />
        </div>
        <div className="itemDetails">
            <h2 className="itemName">{item.name}</h2>
            <div className="itemPrice">{item.currency}{item.price}</div>
            <div className="itemDescription">{item.description}</div>
            <div className="line"></div>

            <div className="addOrRemoveItem">
              <button className="addToCart" onClick={()=>increaseCount({item})}>
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
              <button className="removeFromcart" onClick={()=>decreaseCount({item})}>
                <span className="material-symbols-outlined">
                  remove_shopping_cart
                </span>
              </button>
            </div>
            <button onClick={() => navigate(-1)} className="btnBack">Go back</button>
        </div>
        
    </div>
    </div>
    
  );
}

export default ProductPage;