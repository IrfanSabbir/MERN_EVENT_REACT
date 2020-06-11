import React from "react";
import {connect} from 'react-redux'

import NaigationItems from '../NavigationItems/NavigationItems'
// import Logo from '../../UI/'
import classes from './Toolbar.css'
import Logo from '../../UI/assets/Icon/Logo'
import Toggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar =(props)=>{
    return(
        <div className={classes.Toolbar}>
            <div className={classes.Logo}><Logo/></div>
            <Toggle clicked={props.SidedrawerControll}/>
           <nav className={classes.desktop}><NaigationItems /></nav> 
           {/* {props.isAuth &&  <Avatar  className={classes.large} style={{margin:"auto"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} */}

        </div>
    )
}
const mapStateToProps = state =>{
    return{
      isAuth:state.auth.token !== null
    }
  }
  

export default connect(mapStateToProps)(toolbar)