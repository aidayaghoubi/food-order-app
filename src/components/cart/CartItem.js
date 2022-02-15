import { Fragment } from "react/cjs/react.production.min";
import classes from './../cart/cartitem.module.css'



const CartItem = props => {

    const clickaddhandler = () => {

        props.onAdd();
    }
    const clickMinushandler = () => {
       
        props.onRemove();
    }
    console.log(props)
    return (
        <Fragment>
            <div className={classes.itemInHeaderWrapper}>
                <h1>{props.nama}</h1>
                <div className={classes.inro}>

                    <h4>${props.price * props.amount}</h4>
                    <span>x {props.amount}</span>

                    <div className={classes.btnHolder}>
                        <button onClick={clickaddhandler}>+</button>
                        <button onClick={clickMinushandler}>-</button>
                    </div>

                </div>
            </div>
        </Fragment>
    )

}

export default CartItem;