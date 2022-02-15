import classes from '../meals/MealsSummary.module.css';
import MealItem from './MealItem/Mealitem';
import Card from '../ui/Card';
const Dummy_meals = [
    {
        id: `m1`,
        name: 'Quick Vegan Curry',
        description: 'We’rthis one is now regular And, it takes under 25 minutes to whip up! It’s an ode to the simplicity',
        price: 2.52
    },
    {
        id: `m2`,
        name: 'Honey Garlic Shrimp',
        description: 'First up in our real foodh, satisfyhy, easy and delicious: and this one has it in spades. Add pan',
        price: 25.52
    },
    {
        id: `m3`,
        name: 'Easy Pizza Soup',
        description: 'This pizza soup is a comfort food rred with s, oed r make over and over…and over.',
        price: 4.55
    },
    {
        id: `m4`,
        name: 'Crispy Avocado Tacos',
        description: 'Meet your recipe soulmate: Cris beaa ven  but it’s easy to whip up in your kitchen. ',
        price: 2.82
    }

]

const AvailableMeals = () => {
    const mealslist = Dummy_meals.map(meal => {
        return <MealItem
        key={meal.id} 
        id={meal.id}
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