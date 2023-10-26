import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState, useEffect, useRef} from "react"
import App from "./App";
import ErrorPage from "./ErrorPage";
import itemData from "./assets/data/itemData"
import ProductPage from "./Components/ProductPage";
import HomePage from "./Components/HomePage";
import ShoppingCartPage from "./Components/ShoppingCartPage";
import ShopPage from "./Components/ShopPage";
import pretendCart from "./assets/data/pretendCart";
import uniqid from 'uniqid'

const Router = function(){
  const [data]=useState(itemData)
  const [cart,setCart] = useState(pretendCart)
  //const quantity= useRef(5)
  const [quantity, setQuantity] = useState(5)
  useEffect(()=>{
    //quantity.current = getQuantity(cart)
    setQuantity(getQuantity(cart))
    
  },[cart])

  const getQuantity = function(cart){
    var num = 0
    console.log(cart)
    cart.map((product)=>{
        if(product!=undefined){
          num = product.quantity + num
        }
        })
    console.log(`Number of total items in cart: ${num}`)
    return num
  }

  const alreadyExists = function(item){
    var already_exists = false
    cart.map((product)=>{
      if(product.item.name==item.name){
        already_exists = true 
      }
    })
    return already_exists
  }
  const increaseCountProductPage = function(item){
    if(alreadyExists(item)){
      const newCart = cart.map((product)=>{
        console.log(product.item.name)
        if(product.item.name!=item.name){
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
    else{
      setCart([
        ...cart,
        {
          item: item,
          quantity: 1,
          id: uniqid()
        }
      ])
    }
  }

  
  const decreaseCountProductPage = function(item){
        var num_of_item = 0
        cart.map((product)=>{
          if(product.item.name==item.name){
            num_of_item = product.quantity
          }
        })
        if(num_of_item==1){
          deleteFromCartViaProductPage(item)
        }
        else{
          const newCart = cart.map((product)=>{
            if(product.item.name!=item.name){
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

  const increaseCount= function(item){
      const newCart = cart.map((product)=>{
        if(product.item.name!=item.item.name){
            return product
        }else{
            return(
                {
                    ...product,
                    quantity: product.quantity+1
                }
            )
        }
    })
    setCart(newCart)   
}

const deleteFromCartViaProductPage= function(item){
  console.log("called delete from cart via Product Page")
    const newCart = cart.filter((product)=>{
        if(product.item.name!=item.name){
          return product
        }
    })
    //console.log(newCart)
    setCart(newCart)
    //console.log(cart)
}

const deleteFromCart = function(item){
  console.log("called delete from cart")
    const newCart = cart.filter((product)=>{
        return(product.id!=item.id)
    })
    console.log(newCart)
    setCart(newCart)
    
}


const decreaseCount = function(item){
    if(item.quantity==1){
        deleteFromCart(item)
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
  const routes =[{
    path:"/",
    element:<App quantity={quantity}/>, 
    errorElement:<ErrorPage />
  }]
  data.map((item)=>{
    routes.push(
      {
        path: `${item.path}`,
        Component: () => (
          <ProductPage item={item} key={item.id} quantity={quantity} decreaseCount={()=>decreaseCountProductPage(item)} increaseCount={()=>increaseCountProductPage(item)}/>
          )
      }
    )
    })

    routes.push(
      {
        path:"/homePage",
        element:<HomePage />
      }
    )
    routes.push(
      {
        path:"/shoppingCartPage",
        element:<ShoppingCartPage cart={cart} quantity={quantity} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
      }
    )
    routes.push(
      {
        path:"/shopPage",
        element: <ShopPage quantity={quantity}/>
      }
    )

  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

 export default Router;