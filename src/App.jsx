//import { Link } from "react-router-dom";
//import itemData from "./assets/data/itemData.js"
import React, { useState, useEffect } from "react";
import useShoppingCart from "./Components/useShoppingCart";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Components/HomePage"
import "./App.css"



const App = function(){
  //const [data]=useState(itemData)
  //const {cart, addItemtoCart, removeItemfromCart} = useShoppingCart();
  

  
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
      
    </div>
  );
};
export default App;