import classes from '../../ui/ul.module.css';
import Input from '../../ui/Input';
import { useRef } from 'react';
import CartContext from '../../../store/cart-content';

const MealItemForm = props => {



    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const eneterdAmount = amountInputRef.current.value;
        console.log(eneterdAmount)
    }


    return <form className={classes.form} style={{ textAlign: 'right' }} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            lable="Amount"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultvalue: '1'
            }} />
        <button className={classes.add} onClick={submitHandler}>+ Add</button>
    </form>
}
export default MealItemForm;