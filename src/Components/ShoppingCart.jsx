import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";

const ShoppingCart = function(){
    const navigate = useNavigate();
    return(
        <>
            <NavigationBar></NavigationBar>
            <div className="ShoppingCart">
                <h1>Your Cart</h1>
                <button onClick={() => navigate(-1)} className="btnBack">Continue Shopping</button>
            </div>
        </>
        

    )
}
export default ShoppingCart;