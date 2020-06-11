import React from 'react'
import classes from './SideDrawer.css'
import Navigations from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sidedrawer = (props)=>{
    return(
        <React.Fragment>
            
            <div className={classes.SideDrawer} onClick={props.cancleDrawer}>
             
                <nav><Navigations /></nav>
            </div>
            <Backdrop cancleModal={props.cancleDrawer} />
         </React.Fragment>
    )
}
export default sidedrawer
