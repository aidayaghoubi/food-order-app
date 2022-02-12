import classes from './ul.module.css';

const Input = props => {
    return <div className={classes.wrapper}>
        <label htmlFor={props.input.id} className={classes.lable}>{props.lable}</label>
        <input id={props.input.id} {...props.Input} className={classes.input} />
    </div>
}
export default Input;