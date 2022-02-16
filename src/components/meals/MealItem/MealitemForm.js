import classes from '../../ui/ul.module.css';
import Input from '../../ui/Input';
import { useContext, useEffect, useRef, useState } from 'react';
import { FunctionalContext } from '../../../store/cart-content';

const MealItemForm = props => {

    const [enterdNumIsValid, setenterdNumIsValid] = useState(true)
   
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const eneterdAmount = amountInputRef.current.value;

        //the eneterdAmount is number but here its string to change its type to number 
        //we should use + before this value like here 
        const enterdAmountnNumber = +eneterdAmount;

        if (eneterdAmount.trim().length === 0 || enterdAmountnNumber < 1 || enterdAmountnNumber > 5) {
          
            setenterdNumIsValid(false);
            amountInputRef.current.value='';
            return;
        } else {
            setenterdNumIsValid(true);
            props.onAddItem(enterdAmountnNumber);
            amountInputRef.current.value='';
          
        }

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
        {!enterdNumIsValid && <p className={classes.warning}>Plese Enter A Calid number between 1 to 5</p>}
    </form>
}
export default MealItemForm;