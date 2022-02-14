import { useReducer } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import CartContext from "./cart-content";

const defaultCartState ={
    items:[],
    totalAmount:0
};

const  cartReduser = (state, action) =>{
    if(action.type === 'ADD'){
        const updatesItems = state.items.concat(action.items);
        const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;
    return{
        items:updatesItems,
        totalAmount: updatedTotalAmount
    };
    
    }
    return defaultCartState
}

const CartProvider = props => {
   const [cartstate, dispatchCarAction] = useReducer(cartReduser,defaultCartState);


    const addItemToCartHandler = item => { 
        dispatchCarAction({type:'ADD' , item:item})
    };
    const removeItemToCartHandler = id => {
        dispatchCarAction({type:'REMOVE' , id:id})
     };
    const cartContext = {
        items: cartstate.items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler 
    }

    return <CartContext.Provider value={cartContext}> 
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;