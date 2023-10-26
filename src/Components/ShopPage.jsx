import NavigationBar from "./NavigationBar";
import itemData from "../assets/data/itemData";
import { useState } from "react";
import Item from "./Item";
const ShopPage = function({quantity}){
    const [data]=useState(itemData)
    return(
        <div>
            <NavigationBar quantity={quantity}></NavigationBar>
            <div className="shopPage">
             
              <div className="shoppingContainer">
              <h1>Shop Page</h1>
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
            
        </div>
    )
}
export default ShopPage