import { useContext } from "react";
import React, { Fragment } from "react";
import classes from "./HederCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

   const cartCtx  = useContext(CartContext);
   const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
   },0);
  return <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span> Your cart</span>
        <span className={classes.badge}> {numberOfCartItems} </span>
      </button>
  </Fragment>;
};

export default HeaderCartButton;
