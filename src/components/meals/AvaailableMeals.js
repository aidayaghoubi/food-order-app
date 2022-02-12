import classes from '../meals/MealsSummary.module.css';
import MealItem from './MealItem/Mealitem';
import Card from '../ui/Card';
const Dummy_meals = [
    {
        id: `m1`,
        name: 'Quick Vegan Curry',
        description: 'We’re always on the lookout for fast flavorful dinners, and this one is now regular rotation. Try this quick Vegan Curry! Here, coconut milk and curry powder make healthy vegetables taste like a decadent treat. And, it takes under 25 minutes to whip up! It’s an ode to the simplicity',
        price: 2.52
    },
    {
        id: `m2`,
        name: 'Honey Garlic Shrimp',
        description: 'First up in our real food recipes: this honey garlic shrimp! There’s nothing like the sweet savory combination of honey garlic glaze and juicy shrimp. The best part? It takes 10 minutes to make. This one is hits all the comforting, satisfying dinner notes with a lightning fast prep speed. It’s hard to find those recipes with that elusive trifecta of healthy, easy and delicious: and this one has it in spades. Add pan',
        price: 25.52
    },
    {
        id: `m3`,
        name: 'Easy Pizza Soup',
        description: 'This pizza soup is a comfort food recipe to the max! Who wouldn’t want all the flavors of a supreme pizza wrapped up in a cozy bowl? The broth is flavored with pizza sauce, tomatoes, and a little Parmesan to make it creamy. The toppings are swimming along inside: bell peppers, garlic and mushrooms, making for a savory pop that surprises you in every bite. Serve with garlic toast, grilled cheese or simply crusty bread and it’s a meal you’ll want to make over and over…and over.',
        price: 4.55
    },
    {
        id: `m4`,
        name: 'Crispy Avocado Tacos',
        description: 'Meet your recipe soulmate: Crispy Avocado Tacos. Could there be a taster tortilla filling? We think not. You’ve got avocado fries, breaded and baked in a hot oven until crispy, with a texture reminiscent of a fried fish taco. Then top that with spiced black beans, pico de gallo, and the refreshing crunch of romaine lettuce. Drizzle on a creamy lime and cilantro sauce, and it’s heaven on a plate. It tastes like restaurant tacos, but it’s easy to whip up in your kitchen. ',
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