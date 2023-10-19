import { Navigate, useNavigate } from "react-router-dom";

const Profile= function(props){
  const {item} = props
  const navigate =useNavigate()
  return (
    <div className="itemContainer">
        <div className="itemImageContainer">
            <img src={item.image} alt={item.name} className="itemImage" />
        </div>
        <div className="itemDetails">
            <h2 className="itemName">{item.name}</h2>
            <div className="itemPrice">{item.price}</div>
            <div className="itemDescription">{item.description}</div>
            <div className="line"></div>
            <button onClick={() => navigate(-1)} className="btnBack">Go back</button>
        </div>
        
    </div>
  );
}

export default Profile;