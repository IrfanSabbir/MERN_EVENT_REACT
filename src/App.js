import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import classes from './App.css';

import Events from './containers/Events/Events'
import Developer from './containers/Developer/Developer'

import Profile from './containers/Profile/Profile'
import Bookings from './containers/Bookings/Bookings'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/LogOut/LogOut'
import * as action from './store/actions/index'

class App extends Component{
  constructor(props){
    super(props)
    
    props.onFetchEvents()
}
componentDidMount(){
  this.props.onAuthCheck()
}  

render() {
 
  let route =   (<Switch>
                    <Route path="/developer"  component={Developer}/>
                    <Route path="/auth"  component={Auth}/>
                    <Route path="/" exact component={Events}/>
                    <Redirect to="/" exact />
                  </Switch>)
      if(this.props.isAuth){
        route =(
            <Switch>
               <Route path="/developer"  component={Developer}/>
               <Route path="/logout"  component={Logout}/>
              <Route path="/profile"  component={Profile}/>
              <Route path="/bookings"  component={Bookings}/>
              <Route path="/" exact component={Events}/>
              <Redirect to="/" exact/>
          </Switch>
        )
      }             
  return (
    <div className={classes.App}>
         
      <Layout>
        {route}
      </Layout>  
    </div>
  );
}
}
const mapStateToProps = state =>{
  return{
    isAuth:state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAuthCheck:()=>dispatch(action.auth_check()),
    onFetchEvents:()=>dispatch(action.fetchEvents())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
