import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
//import useShoppingCart from "./useShoppingCart";

const ShoppingCartPage = function({cart}){
    //const {cart} = useShoppingCart();
    const navigate = useNavigate();
    if(cart.length==0){
        return (
            <>
            <NavigationBar></NavigationBar>
            <div className="ShoppingCartPage">
                <h1>Your Cart</h1>
                <div className="line"></div>
                <p>You currently have nothing in your cart</p>
                <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
            </div>
        </>
        )
    }
    else{
        return(
            <>
                <NavigationBar></NavigationBar>
                <div className="ShoppingCartPage">
                    <h1>Your Cart</h1>
                    <div className="line"></div>

                    <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
                </div>
            </>
            
    
        )
    }
    
}
export default ShoppingCartPage;