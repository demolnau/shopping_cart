import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState} from "react"
import App from "./App";
import ErrorPage from "./ErrorPage";
import itemData from "./Components/itemData.js"
import Profile from "./Profile";

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
          <Profile item={item} key={item.id}/>
          )
      }
    )
    })
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

 export default Router;