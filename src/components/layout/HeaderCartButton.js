import { useContext } from 'react';

import CartIcon from '../cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-content';

const HeaderButton = ({ onClick }) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
    const numberOfItems = cartCtx.items.reduce((curnumber, item) => {
        return curnumber + item.totalAmount;

    }, 0);

    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={classes.badge}>
                {numberOfItems}
            </span>
        </button>
    )
}
export default HeaderButton;