import { Link } from "react-router-dom";
import "../styles/Item.styles.css"
//import React from "react";
const Item = function({item}){
    return (
      <Link className="shopItem" to={item.path} id="shopItem">
        <div className="itemImageContainer">
            <img src={item.image} alt={item.name} className="itemThumb" />
        </div>
        <div className="itemInfo">
            <p className="itemName">{item.name}</p>
            <p className="itemPrice">{item.currency}{item.price}</p>
        </div>
      </Link>
    );
  };
  export default Item;