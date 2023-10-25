/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../styles/NavigationBar.styles.css"

const NavigationBar = function({quantity}){
    return(
        <div className="navigationBar">
            <h1> <Link className="HomePage" to="/">Mini Shopping Site</Link></h1>
            <nav className="rightNavigationBar">
                <Link className="shopPage" to="/shopPage">Shop</Link>
                <Link className="searchIcon" to="searchPage">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </Link>
                <Link className="shoppingCartPage" to="/shoppingCartPage">
                    <span className="material-symbols-outlined">
                        shopping_cart
                        {quantity > 0 &&
                            <span className="quantity_in_cart">
                                {quantity}
                            </span>
                        }
                    </span>
                </Link>
            </nav>
        </div>
        

    )
}
export default NavigationBar;