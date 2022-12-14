import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {

  const [cardIshown,setCartIsShown] = useState(false);

 const showCardHandler = () =>{
      setCartIsShown(true)
 }

 const hideCardHandler = () =>{
  setCartIsShown(false)
 }


  return (
    <CartProvider>
    {cardIshown && <Cart onClose={hideCardHandler}/>}
     <Header onShowCart = {showCardHandler}/>
     <main>
      <Meals />
     </main>
    </CartProvider>
  );
}

export default App;
