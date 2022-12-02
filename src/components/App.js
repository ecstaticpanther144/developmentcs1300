import './App.css';
import './bootstrap.css';
import { useState } from "react";
import shoeData from "../assets/shoe-data.json";
import ShoeItem from "./ShoeItem.js";
import Filters from "./Filters";

shoeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  
  const[type, setType] = useState("All");
  const[style, setStyle] = useState("All")
  const[sort, setSort] = useState("lowtohigh")
  const[list, setList] = useState([]);

    

  const selectFilterType = eventKey => {
    setType(eventKey)
  }

  const selectFilterStyle = eventKey => {
    setStyle(eventKey)
  }

  const selectSort = eventkey => {
    setSort(eventkey)
  }
  
  function matchesColorFilterType(item){
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.color) {
      return true
    } else {
      return false
    }
  }

  function matchesStyleFilterType(item) {
    // all items should be shown when no filter is selected
    if(style === "All") { 
      return true
    } else if (style === item.style) {
      return true
    } else {
      return false
    }
  }
  
  function sortBy(item1, item2) {
    if(sort === "lowtohigh"){
      return item1.price - item2.price
    } else if(sort === "hightolow"){
      return item2.price - item1.price
    }
  }

  const filteredData = shoeData.filter(matchesStyleFilterType).filter(matchesColorFilterType).sort(sortBy)
  console.log(filteredData)

  function buttonFunction(item){  
    return( 
      <button onClick={() => setList([...list, item])}>
        Add to cart
      </button>
    );
  }



  function makeCart(){
    return(
      list.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </div>
      )
      )
    )
  }

  function removeFromCart(name){
    const newList = list.filter((item) => item.name !== name);
    setList(newList);
  }


  const cartPrices = list.map(function (item, index, array) {
    return item.price; 
  });

  const totalPrice = cartPrices.reduce(function (previous, current) {
    return previous + current;
  }, 0);


  return (
    <div className="App">
      <div class="Main-grid">
        <div>
          <h1>Cool Shoes</h1> 
          {filteredData.map((item, index) => ( 
            <ShoeItem key={index} item = {item} buttonFunction = {buttonFunction}/>
          ))}
        </div>
        <div class="sidenav">
          <Filters selectFilterType = {selectFilterType} selectFilterStyle = {selectFilterStyle} selectSort = {selectSort}/>
          <h3>Cart</h3>
          {makeCart()}
          <p>Total price: {totalPrice}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
