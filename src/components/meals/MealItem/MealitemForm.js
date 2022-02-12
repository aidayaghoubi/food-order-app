import classes from '../../ui/ul.module.css';
import Input from '../../ui/Input';

const MealItemForm = props => {

    return <form className={classes.form} style={{textAlign:'right'}}>
        <Input lable="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultvalue:'1'
        }} />
        <button className={classes.add}>+ Add</button>
    </form>
}
export default MealItemForm;