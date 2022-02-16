import { useContext, useEffect, useState } from 'react';

import CartIcon from '../cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import {FunctionalContext} from '../../store/cart-content';

const HeaderButton = ({ onClick }) => {
    
    const cartCtx = useContext(FunctionalContext);

    const numberOfItems = cartCtx.items.reduce((curnumber, item) => {
        return curnumber + item.amount;
    }, 0);

    const [btnIsLighted, setbtnIsLighted] = useState(false);

    const btnclass = `${classes.button}  ${btnIsLighted ? classes.anima : ''}`;

    useEffect(() => {
        setbtnIsLighted(true)
        const timer = setTimeout(() => {
            setbtnIsLighted(false)
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items])

    return (
        <button className={btnclass} onClick={onClick}>
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