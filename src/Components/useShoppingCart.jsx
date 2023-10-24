import { useState } from "react";
import uniqid from 'uniqid'
const useShoppingCart = function(item){
    const [cart, setCart] = useState([])
    const addItemtoCart=function(item){
      var item_to_add = item.item
        if(cart.length==0){
          // const product = {item:{item_to_add}, quantity: 1, id: uniqid()}
          // setCart({product})
          setCart([{item:{item_to_add}, quantity: 1, id: 0}])
          console.log("cart now has something in it")
        }
        else{
          // cart.map((product)=>{
          //   if(product.item.item_to_add.name==item.item.name){
          //           console.log("Item is already in list!!")
          //   }
          // }

          // )
          
          setCart(
            [
              ...cart,
              {
                item: {item_to_add},
                quantity:1,
                id:uniqid()
              }
            ]
          )
        }
        // else{
        //   // setCart((cart) => ({
        //   //   ...cart,
        //   //   product:{
        //   //     ...cart.product,
        //   //     quantity: cart.product.quantity + 1
        //   //   }
        //   // })
        //   // )

        //   const cart_to_be = cart.map((product)=>{
        //     if(product.item.item_to_add.name!=item.item.name){
        //       return product,
        //     }
        //     else{
        //       return{
        //         ...product,
        //         quantity: product.quantity +1
        //       }
        //     }
        //   })
          //setCart(cart_to_be)
        // }
        
    console.log(cart)    
    return cart
  }
  const removeItemfromCart = function(item){
    console.log(item.item.name)
    if(cart.length>0){
      if(cart[cart.length-1].item.item_to_add.name==item.item.name){
        setCart(
          cart.slice(0,-1)
        )
      }
      // cart.map((product)=>{
        
        // if(product.item==item){
        //   product.quantity = product.quantity - 1
          
        //   if(product.quantity==0){
        //     cart.splice(cart.indexOf(product) ,1)
        //   }
        // }
      //})
    }
    //console.log(cart)
    return cart
  }
    return {cart, addItemtoCart, removeItemfromCart}
}

export default useShoppingCart;