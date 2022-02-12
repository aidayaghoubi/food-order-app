import classes from '../meals/MealsSummary.module.css';
import MealItem from './MealItem/Mealitem';
import Card from '../ui/Card';
const Dummy_meals = [
    {
        id: `m1`,
        name: 'sushi',
        description: 'crdwe dde wwded wee fedewd',
        price: 2.52
    },
    {
        id: `m2`,
        name: 'ewd',
        description: 'cr kedewdew fewdfew fe',
        price: 25.52
    },
    {
        id: `m3`,
        name: 'dewde',
        description: 'cr ke ewfewfewf ferfew feww fe',
        price: 4.55
    },
    {
        id: `m4`,
        name: 'dew',
        description: 'cr ke peo  dweiu dewnui dweudew fe',
        price: 2.82
    }

]

const AvailableMeals = () => {
    const mealslist = Dummy_meals.map(meal => {
        return <MealItem key={meal.id} 
        name={meal.name} 
        price={meal.price} 
        description={meal.description} />
    });
    return <section className={classes.wraper}>
        <Card>
            <ul>
                {mealslist}
            </ul>
        </Card>
    </section>
}
export default AvailableMeals;