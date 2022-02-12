import classes from '../cart/card.module.css';


const Card = props => {

    return (
        <div>
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button className={classes.close}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}

export default Card;