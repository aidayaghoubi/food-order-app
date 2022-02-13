import reactDom from 'react-dom'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './Model.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement=document.getElementById('overlays');
const Modal = props => {

    return <Fragment>
        {reactDom.createPortal(<Backdrop />,portalElement)}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>

}

export default Modal;