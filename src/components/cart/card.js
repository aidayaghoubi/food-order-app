import classes from '../cart/card.module.css';
import Modal from '../ui/Model';


const Cart = props => {

const cartitem =<ul className={classes.cartItemes}>{ [{id:'c1' , name:'sushi' , amount:2 , price:12.99  }]
.map((item) => <li key={item.id}>{item.name}</li>)}</ul>;


    return (
        <Modal>
            {cartitem}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button className={classes.close}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;