import { Link } from "react-router-dom";
const NavigationBar = function(){
    return(
        <div className="navigationBar">
            <h1> Mini Shopping Site</h1>
            <nav className="rightNavigationBar">
                <Link className="shoppingPage" to="shoppingPage">Shop</Link>
                <Link className="searchIcon" to="searchPage">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </Link>
                <Link className="shoppingCart" to="/shoppingCart">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Link>
            </nav>
        </div>
        

    )
}
export default NavigationBar;