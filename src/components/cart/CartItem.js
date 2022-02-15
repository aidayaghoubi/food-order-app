import { Fragment } from "react/cjs/react.production.min";
import classes from './../cart/cartitem.module.css'



const CartItem = props => {
    return(
        <Fragment>
            <div className={classes.itemInHeaderWrapper}>
             <div className={classes.inro}>
                 <h1></h1>
                 <h4></h4>
              <button>x1</button>
             </div>
             <div>
                 <button>+</button>
                 <button>+</button>
             </div>
            </div>
        </Fragment>
    )

}

export default CartItem;