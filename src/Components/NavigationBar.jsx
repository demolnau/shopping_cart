/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../styles/NavigationBar.styles.css"

const NavigationBar = function({quantity}){
    return(
        <div className="navigationBar">
            <div className="leftNavigationBar">
                <h1> <Link className="HomePage" to="/" id="navigationBarItem">Mini Shopping Site</Link></h1>
            </div>
            
            <nav className="rightNavigationBar">
                <Link className="shopPage" to="/shopPage" id="navigationBarItem">Shop</Link>
                <Link className="searchIcon" to="searchPage" id="navigationBarItem">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </Link>
                <Link className="shoppingCartPage" to="/shoppingCartPage" id="navigationBarItem">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span className="badge badge-warning" id="quantity_in_cart">
                        {quantity}
                    </span>
                </Link>
            </nav>
        </div>
        

    )
}
export default NavigationBar;