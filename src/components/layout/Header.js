import { Fragment } from "react/cjs/react.production.min";
import img from '../assees/back.jpg';
import classes from '../layout/Header.module.css';
import HeaderButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>YOUR MEALS</h1>
              <HeaderButton />
            </header>
            <div className={classes['main-image']}>
                <img src={img} />
            </div>
        </Fragment>

    )
};


export default Header;