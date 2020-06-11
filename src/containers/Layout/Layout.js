import React, {Component} from 'react'
import Toolbar from '../../components/Navigations/toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigations/SideDrawer/SideDrawer'


class Layout extends Component{
   
    state={
        sideDrawer: false

    }
    SidedrawerControllHandler=()=>{
        this.setState(prevState=>{
            return({sideDrawer: !prevState.sideDrawer})
        })

    }
    cancleDrawerHandler=()=>{
        this.setState({sideDrawer:false})
    }
    render(){
        return(
            <div >
                <Toolbar SidedrawerControll={this.SidedrawerControllHandler}/>

                {this.state.sideDrawer ?
                <SideDrawer  cancleDrawer={this.cancleDrawerHandler} />
                : null}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
             
            </div>
        )
    }
}


  
export default Layout