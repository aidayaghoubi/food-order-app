import classes from '../cart/card.module.css';
import Modal from '../ui/Model';


const Cart = ({onClose}) => {

const cartitem =<ul className={classes.cartItemes}>{ [{id:'c1' , name:'sushi' , amount:2 , price:12.99  }]
.map((item) => <li key={item.id} className={classes.eachiem}>{item.name}</li>)}</ul>;


    return (
        <Modal onClick={onClose}>
            {cartitem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.btnholder}>
                <button className={classes.close} onClick={onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;