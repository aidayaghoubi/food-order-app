import classes from './Mealitem.module.css';
import MealItemForm from './MealitemForm';

const MealItem = ({price , name,description}) => {
const pricee = `$${price}`

 return<li className={classes.lii}>
     <div ><h3 className={classes.title}>{name}</h3></div>
     <div className={classes.description}>{description}</div>
     <div className={classes.price}>{pricee}</div>
     <div className={classes.line}></div>
     <div>
   <MealItemForm />
   </div>
 </li>
};
export default MealItem;