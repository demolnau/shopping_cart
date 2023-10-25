/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
//import useShoppingCart from "./useShoppingCart";
import pretendCart from "../assets/data/pretendCart";
import { useState, useEffect } from "react";
import uniqid from "uniqid"
import "../styles/ShoppingCartPage.styles.css"

// const images = require.context("../images", true);

// function loadImage(image) {
//   return images(`./${image}`);
// }

const ShoppingCartItem = function({item, increaseCount, decreaseCount}){
    // const {item} = props
    // const {cart} = props
    
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
const ShoppingCartPage = function(){
    const [cart,setCart] = useState(pretendCart)
    const navigate = useNavigate();
   
    const increaseCount= function(item){
        const newCart = cart.map((product)=>{
            if(product.item.name!=item.item.name){
                return product
            }else{
                return(
                    {
                        ...product,
                        quantity: product.quantity +1
                    }
                )
            }
        })
        setCart(newCart)   
    }

    const decreaseCount = function(item){
        if(item.quantity==1){
            const newCart = cart.filter((product)=>{
                return(product.id!=item.id)
            })
            setCart(newCart)
            console.log(newCart)
        }
        else{
            const newCart = cart.map((product)=>{
                if(product.item.name!=item.item.name){
                    return product
                }else{
                    if(product.quantity>1){
                        return(
                            {
                                ...product,
                                quantity: product.quantity-1
                            }
                        )
                    }
                }
            })
            setCart(newCart)  
        }
         
        
    }

    const getTotal = function(){
        var total = 0
        cart.map((item)=>{
            //total = total + Number(item.item.price)
            if(item.item.currency == "\u20AC"){
                total = total + ((Number(item.item.price)*1.0589)* item.quantity )
                total =  total.toFixed(2)
            }
            else{
                total = total + (Number(item.item.price)*item.quantity)
            }
        })
        return total
    }

    if(cart.length==0){
        return (
            <>
            <NavigationBar></NavigationBar>
            <div className="shoppingCartPage">
                <h1>Your Cart</h1>
                <div className="line"></div>
                <p>You currently have nothing in your cart</p>
                <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
            </div>
        </>
        )
    }
    else{
        return(
            <>
                <NavigationBar></NavigationBar>
                <div className="shoppingCartPage">
                    <h1>Your Cart</h1>
                    <div className="line"></div>
                    {
                        cart.map((item)=>{
                            return(
                                <ShoppingCartItem item={item} key={uniqid()} increaseCount={()=>increaseCount(item)} decreaseCount={()=>decreaseCount(item)}/>
                            )
                        })
                        
                    }
                    <div className="totalContainer"><b>Total: ${getTotal()} </b></div>
                    <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
                </div>
            </>
            
    
        )
    }
    
}
export default ShoppingCartPage;