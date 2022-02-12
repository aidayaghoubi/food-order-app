import classes from './MealItemForm.molule.css';
import Input from '../../ui/Input';

const MealItemForm = props => {

    return <form className={classes.form}>
        <Input lable="amount" input={{
            id:'aamount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultvalue:'1'
        }} />
        <button>+ Add</button>
    </form>
}
export default MealItemForm;