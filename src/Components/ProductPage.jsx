import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import useShoppingCart from "./useShoppingCart";
import "../styles/ProductPage.styles.css"

const ProductPage= function(props){
  const {item} = props
  const {addItemtoCart, removeItemfromCart} = useShoppingCart();
  // const cart = []
  
  // const addItemtoCart=function(){
  //   //var quantity = 0
  //   if(cart.length==0){
  //     var quantity = 1;
  //     cart.push({item, quantity})
  //   }
  //   else{
  //     cart.map((product)=>{
  //       if(product.item == item){
  //         product.quantity = product.quantity + 1 
  //       }
  //     })
  //   }
  //   console.log(cart)
  //   return cart
  // }

  // const removeItemfromCart = function(){
  //   if(cart.length>0){
  //     cart.map((product)=>{
  //       if(product.item==item){
  //         product.quantity = product.quantity - 1
          
  //         if(product.quantity==0){
  //           cart.splice(cart.indexOf(product) ,1)
  //         }
  //       }
  //     })
  //   }
  //   console.log(cart)
  //   return cart
  // }
 
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



            {/* <div className="addOrRemoveItem">
              <button className="addToCart" onClick={addItemtoCart}>
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
              <button className="removeFromcart" onClick={removeItemfromCart}>
                <span className="material-symbols-outlined">
                  remove_shopping_cart
                </span>
              </button>
            </div> */}

            <div className="addOrRemoveItem">
              <button className="addToCart" onClick={()=>addItemtoCart({item})}>
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
              <button className="removeFromcart" onClick={()=>removeItemfromCart({item})}>
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