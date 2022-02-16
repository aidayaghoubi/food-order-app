import classes from './ul.module.css';
import React from 'react';

const Input = React.forwardRef((props ,ref ) => {
    console.log(ref.current)
    return (
    <div className={classes.wrapper}>
        <label htmlFor={props.input.id} className={classes.lable}>{props.lable}</label>
        <input id={props.input.id} {...props.Input} className={classes.input} ref={ref}  />
    </div>
    )
});
export default Input;