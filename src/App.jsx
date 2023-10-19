//import { Link } from "react-router-dom";
import Item from "./Components/Item"
import itemData from "./Components/itemData.js"
import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
// import Router from "./Router"
// import Profile from "./Profile"
// import uniqid from 'uniqid'
import "./App.css"



const App = function(){
  const [data]=useState(itemData)
  return (
    <div>
    <NavigationBar></NavigationBar>
      <p>Welcome to The Mini Store page where we  practice routing to multiple pages for the first time! Below are possible items that you can add to your shopping cart</p>
      <div className="shoppingContainer">
        <div className="shoppingGrid">
          {data.map((item) => {
            return(
              <Item item={item} key={item.id}/>
            )
          })
          }
        </div>
      </div>
    </div>
  );
};
export default App;