import { Fragment } from "react/cjs/react.production.min";
import AvailableMeals from "./AvaailableMeals";
import MealSummary from "./MealsSumary";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
    )
}
export default Meals;