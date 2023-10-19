
const Profile= function(props){
   const {item} = props
  console.log(item)
  return (
    <div>
        <div className="itemImageContainer">
            <img src={item.image} alt={item.name} className="itemImage" />
        </div>
        <div className="itemInfo">
            <p className="itemName">{item.name}</p>
            <p className="itemPrice">`{item.price}`</p>
        </div>
        <p className="itemDescription">{item.description}</p>
    </div>
  );
}

export default Profile;