/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";
//import itemData from "./assets/data/itemData.js"
import React, { useState, useEffect, useRef } from "react";
//import ShoppingCartPage from "./Components/ShoppingCartPage";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Components/HomePage"
//import pretendCart from "./assets/data/pretendCart";
import "./App.css"



const App = function({quantity}){
  return (
    <div>
      <NavigationBar
        quantity={quantity} />
      <HomePage></HomePage>
      
    </div>
  );
};
export default App;