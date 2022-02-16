import reactDom from 'react-dom'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './Model.module.css';

const Backdrop = ({onClick}) => {
    return <div className={classes.backdrop} onClick={onClick}></div>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const addAnimation = () =>{
    const newclassnaame=`${classes.content} ${classes.faderout}`
}
const portalElement=document.getElementById('overlays');
const Modal = (props) => {

    return <Fragment>
        {reactDom.createPortal(<Backdrop onClick={props.onClick} modalIsInCloseProsses={addAnimation}/>,portalElement)}
        {reactDom.createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>

}

export default Modal;