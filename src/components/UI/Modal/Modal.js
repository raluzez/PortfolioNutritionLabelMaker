import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Styles from "./Modal.module.css";

const modal = (props) => (
    <>
        <Backdrop show={props.show} closeModal={props.closeModal}/>
        <div 
            className={Styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
)

export default modal;