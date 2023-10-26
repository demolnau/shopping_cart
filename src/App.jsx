/* eslint-disable react/prop-types */
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Components/HomePage"
import "./App.css"

const App = function({quantity}){
  return (
    <div>
      <NavigationBar
        quantity={quantity} />
      <HomePage></HomePage>
      
    </div>
  );
};
export default App;