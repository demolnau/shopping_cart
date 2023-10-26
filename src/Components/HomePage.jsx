import Item from "./Item"
import itemData from "../assets/data/itemData"
import React, { useState, useEffect } from "react";
import "../styles/HomePage.styles.css"
//import NavigationBar from "./NavigationBar"


const HomePage = function(){
    const [data]=useState(itemData)
    const getFeatured = function(){
        const featured_array = []
        const possibilities = [...Array(data.length).keys()]
        for(let i=0; i<4 ; i++){
          var num = Math.floor(Math.random() * possibilities.length)
          var rm = possibilities.splice(num,1)
          featured_array.push(rm)
        }
        return featured_array.flat()
    }
    const featured_array = getFeatured()
    return(
        <div className="homePage">
        <div className="upperContainer">
            <p>Welcome to The Mini Store page where we  practice routing to multiple pages for the first time! Below are possible items that you can add to your shopping cart</p>
        </div>
        <div className="lowerContainer">
        <div className="shoppingContainer">
                <h1 className="featuredItemsHeader">Featured Items</h1>
                <div className="shoppingGrid">
                    {data.map((item) => {
                        if(featured_array.includes(item.id)){
                            return(
                                <Item item={item} key={item.id}/>
                            )
                        }
                    })
                    }
                </div>
            </div>
        </div>
            
        </div>
    )
}
export default HomePage;