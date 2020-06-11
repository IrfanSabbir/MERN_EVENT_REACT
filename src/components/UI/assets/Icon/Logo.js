import React from 'react'
import classes from './Logo.css'
import Logo from './logos.png'

const logo =(props)=>{
    return(
        <div className={classes.Logo}>
              <img src={Logo} alt="Event Logo" />
        </div>
    )

}
export default logo