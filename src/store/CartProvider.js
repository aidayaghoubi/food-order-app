import { useReducer } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import CartContext from "./cart-content";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReduser = (state, action) => {

    console.log(action, state)

    if (action.type === 'ADD') {
        const updatesItems = state.items.concat(action.item);

        const exsitinfiteemindex = state.items
            .findIndex(item => item.id === action.item.id);
        let updateaditem;
        let updateditems;
        const existingcartitem = state.items[exsitinfiteemindex];

        // if (existingcartitem) {
        //     updateaditem = {
        //         ...existingcartitem,
        //         amount: existingcartitem.amount + action.items.amount
        //     };
        //     updateditems = [...state.items];
        //     updateditems[exsitinfiteemindex] = updateaditem;
        // }else{
        //     updateaditem = {...action.item};
        //     updateditems= state.items.concat(action.item);

        // }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatesItems,
            totalAmount: updatedTotalAmount

        };

    }
    return defaultCartState
}

const CartProvider = props => {

    const [cartstate, dispatchCarAction] = useReducer(cartReduser, defaultCartState);


    const addItemToCartHandler = item => {
        dispatchCarAction({ type: 'ADD', item: item });

    };
    const removeItemToCartHandler = id => {
        dispatchCarAction({ type: 'REMOVE', id: id })
    };
    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;