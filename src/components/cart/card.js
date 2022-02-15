import classes from '../cart/card.module.css';
import Modal from '../ui/Model';
import CartContext from '../../store/cart-content';
import { useContext } from 'react/cjs/react.development';
import { useState } from 'react';
import CartItem from './CartItem';


const Cart = ({ onClose }) => {
    const cartCTX = useContext(CartContext);
    const [item, setitem] = useState(false);
    const hasItem = cartCTX.items.length > 0;
    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

    const cartitem = <ul className={classes.cartItemes}>{cartCTX.items
        .map((item) => <CartItem 
        key={item.id} 
        className={classes.eachiem} 
        nama={item.name}
        amount={item.amount}
        price={item.price}
        >{item.name}</CartItem>)}</ul>;
    console.log(item)

    return (
        <Modal onClick={onClose}>
            {cartitem}
            <div className={classes.total}>
                <span>{totalAmount}</span>
                <span>35.62</span>
            </div>
            <div className={classes.btnholder}>
                <button className={classes.close} onClick={onClose}>Close</button>
               {hasItem &&  <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;