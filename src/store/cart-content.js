import React, { useState } from "react";

export const FunctionalContext = React.createContext();

export const FunctionalProvider = ({ children }) => {

    const [state, setState] = useState({
        items: [],
        totalAmount: 0
    });


    const addItem = (item, count) => {

        if (state.items.find(cartItem => cartItem.id === item.id)) {

            console.log(item)
            let currentItem = state.items.find(cartItem => cartItem.id === item.id);
            let currentItems = JSON.parse(JSON.stringify(state.items));
            currentItem.amount = currentItem.amount + count;
            currentItem.totalprice =  (currentItem.amount * currentItem.price);
            currentItems = currentItems.filter(cartItem => cartItem.id !== item.id);
            currentItems = [...currentItems, currentItem];

            setState(state => ({ ...state, items: currentItems, totalAmount: state.totalAmount + currentItem.amount }));
        } else {


            let currentItems = JSON.parse(JSON.stringify(state.items));
            currentItems = [...currentItems, item];


            setState(state => ({ ...state, items: currentItems }));
        }
    };

    const removeItem = item => {

        let currentItems = JSON.parse(JSON.stringify(state.items));
        let currentItem = state.items.find(cartItem => cartItem.id === item.id);
        currentItems = currentItems.filter(cartItem => cartItem.id !== item.id);
       
        if (currentItem.amount > 1) {
            currentItem.amount = currentItem.amount - 1;
            currentItem.totalprice =  (currentItem.amount * currentItem.price);
            currentItems = currentItems.filter(cartItem => cartItem.id !== item.id);
            currentItems = [...currentItems, currentItem];
        } else {
            currentItems = currentItems.filter(cartItem => cartItem.id !== item.id);
        }

        setState(state => ({ ...state, items: currentItems, totalAmount: state.totalAmount - 1 }));
    };

    return (
        <FunctionalContext.Provider value={{ items: state.items, totalAmount: state.totalAmount, addItem, removeItem }}>
            {children}
        </FunctionalContext.Provider>
    );
};



