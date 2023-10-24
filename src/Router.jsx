import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState} from "react"
import App from "./App";
import ErrorPage from "./ErrorPage";
import itemData from "./assets/data/itemData"
import ProductPage from "./Components/ProductPage";
import HomePage from "./Components/HomePage";
import ShoppingCartPage from "./Components/ShoppingCartPage";
import ShopPage from "./Components/ShopPage";

const Router = function(){
  const [data]=useState(itemData)
  const routes =[{
    path:"/",
    element:<App />, 
    errorElement:<ErrorPage />
  }]
  data.map((item)=>{
    routes.push(
      {
        path: `${item.path}`,
        Component: () => (
          <ProductPage item={item} key={item.id}/>
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
        element:<ShoppingCartPage/>
      }
    )
    routes.push(
      {
        path:"/shopPage",
        element: <ShopPage />
      }
    )

  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

 export default Router;