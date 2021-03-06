import classes from './Mealitem.module.css';
import MealItemForm from './MealitemForm';
import {FunctionalContext} from '../../../store/cart-content';
import { useContext, useState } from 'react';

const MealItem = (props) => {
  const cartCTX = useContext(FunctionalContext);

  // const pricee = `$${props.price}`;

  const addeneterdnumber = (item) => {
   cartCTX.addItem({
      id:props.id,
      name:props.name,
      amount:item,
      description:props.description,
      price:props.price,
      totalprice:item * props.price
   }, item)
   
    
  }

  return <li className={classes.lii}>
    <div>
      <div >
        <h3 className={classes.title}>{props.name}</h3></div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>${props.price}</div>
    </div>
    <div>

      <MealItemForm onAddItem={addeneterdnumber} />
    </div>


  </li>
};
export default MealItem;