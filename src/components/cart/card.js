import classes from '../cart/card.module.css';
import Modal from '../ui/Model';
import { FunctionalContext } from '../../store/cart-content';
import { useContext } from 'react/cjs/react.development';
import { useState } from 'react';
import CartItem from './CartItem';


const Cart = props => {
    const cartCTX = useContext(FunctionalContext);
    const hasItem = cartCTX.items.length > 0;
    // const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

    const finalamount = cartCTX.items.reduce((acc, curr) => acc + curr.amount, 0);
    const finalprice = cartCTX.items.reduce((acc, curr) => acc + curr.totalprice, 0);
   

    const additemHandler = (item) => {
        cartCTX.addItem(item, 1)
    }
    const removeitemHandler = (item) => {
        cartCTX.removeItem(item)
    }
    const cartitem =
        <ul className={classes.cartItemes}>
            {cartCTX.items.map((item) =>
                <CartItem
                    key={item.id}
                    className={classes.eachiem}
                    nama={item.name}
                    amount={item.amount}
                    price={item.price}
                    totalprice={Math.round(item.price * item.amount)}
                    onAdd={() => additemHandler(item)}
                    onRemove={() => removeitemHandler(item)}>{item.name}
                </CartItem>)}
        </ul>;

   
   
    return (
        <Modal onClick={props.onClose}>
            {cartitem}
            <div className={classes.total}>
                <span className={classes.holder}> 
                    <span className={classes.lable}>total price = </span>
                    <span>${finalprice}</span></span>
               
                <span>{finalamount}</span>
            </div>
            <div className={classes.btnholder}>
                <button className={classes.close} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;