import React from 'react'
import classes from './Modal.css'
// import Button from '../Buttons/Button.js'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props)=>{
    return(
        <div>
           
        <div className={classes.Modal}>
          
            {/* <header>Continue Creating your EVENT!!</header> */}
            {props.children}
            {/* <footer>
                <Button type="Green" clicked={props.cancleModal}>Continue</Button>
                <Button type="Orange" clicked={props.cancleModal}>Cancel</Button>
            </footer>    */}
        </div>
        <Backdrop cancleModal={props.cancleModal} />  

        
               
        
        
        </div>
    )
}

export default modal