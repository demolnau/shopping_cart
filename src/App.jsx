//import { Link } from "react-router-dom";
import Item from "./Components/Item"
import itemData from "./Components/itemData.js"
import React, { useState, useEffect } from "react";
// import Router from "./Router"
// import Profile from "./Profile"
// import uniqid from 'uniqid'
import "./App.css"
import { Link } from "react-router-dom";


const App = function(){
  const [data]=useState(itemData)
  //console.log(data[0])
  // data.map((item)=>{
  //   return(
  //     console.log(`{path: '${item.path}', component:Profile, props: route => ({item: route.item})}`)
  //   )
  // })

  console.log()

  return (
    <div>
      <h1>Mini Grocery Shopping</h1>
      <p>Welcome to The Mini Grocery Store page! Below are possible items that you can add to your shopping cart</p>
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