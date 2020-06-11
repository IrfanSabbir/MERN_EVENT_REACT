import React from 'react'
import classes from './Backdrop.css'
const backdrop = (props)=>{
    console.log('here')
    return (
    <div className={classes.Backdrop} onClick={props.cancleModal}>

    </div>)
    
}
export default backdrop