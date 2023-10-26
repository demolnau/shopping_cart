/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
//import useShoppingCart from "./useShoppingCart";
import pretendCart from "../assets/data/pretendCart";
import { useState, useEffect, useRef } from "react";
import uniqid from "uniqid"
import "../styles/ShoppingCartPage.styles.css"

const ShoppingCartItem = function({item, increaseCount, decreaseCount}){
    return(
        <div className="shoppingCartItem">
            <div className="shoppingCartItemImage">
                <img src={item.item.image} className="shoppingCartThumb"></img>
            </div>
            <div className="shoppingCartItemDetails">
            <div className="itemName"><b>{item.item.ShoppingCartPagename}</b></div>
            <div className="itemPrice">Price: {item.item.currency}{item.item.price}</div>
            <div className="quantity">Quantity: {item.quantity}</div>
            <hr></hr>
            <div className="addOrRemoveItem">
              <button className="addToCart" onClick={increaseCount}>
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
              <button className="removeFromcart" onClick={decreaseCount}>
                <span className="material-symbols-outlined">
                  remove_shopping_cart
                </span>
              </button>
            </div>
            </div>
        </div>
    )
}
const ShoppingCartPage = function({cart, quantity, increaseCount, decreaseCount}){
    const navigate = useNavigate();
    const getTotal = function(){
        var total = 0
        cart.map((item)=>{
            //total = total + Number(item.item.price)
            if(item.item.currency == "\u20AC"){
                total = total + ((Number(item.item.price)*1.0589)* item.quantity )
                
            }
            else{
                total = total + (Number(item.item.price)*item.quantity)
                
            }
        })
        total =  total.toFixed(2)
        return total
    }

    if(cart.length==0){
        return (
            <>
            <NavigationBar quantity={quantity}></NavigationBar>
            <div className="shoppingCartPage">
                <h1>Your Cart</h1>
                <div className="shoppingCartContainer">
                    <p>You currently have nothing in your cart</p>
                </div>
                
                <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
            </div>
        </>
        )
    }
    else{
        return(
            <>
                <NavigationBar quantity={quantity}></NavigationBar>
                <div className="shoppingCartPage">
                    <h1>Your Cart</h1>
                    <div className="shoppingCartContainer">
                    {
                        cart.map((item)=>{
                            return(
                                <ShoppingCartItem item={item} key={uniqid()} increaseCount={()=>increaseCount(item)} decreaseCount={()=>decreaseCount(item)}/>
                            )
                        })
                        
                    }
                    <div className="totalContainer"><b>Total: ${getTotal()} </b></div>
                    </div>
                    
                    <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
                </div>
            </>
            
    
        )
    }
    
}
export default ShoppingCartPage;