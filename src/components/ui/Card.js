import classes from '../meals/MealsSummary.module.css'

const Card = props => {
    return <div className={classes.cart}>{props.children}</div>
}

export default Card;