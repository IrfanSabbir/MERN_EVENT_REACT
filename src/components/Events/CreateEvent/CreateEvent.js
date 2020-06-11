import React,{Component} from 'react'
import classes from './CreateEvent.css'
import Button from '../../UI/Buttons/Button'
import {connect} from 'react-redux'
import ShowEvent from '../ShowEvent/ShowEvent'
import * as action from '../../../store/actions/index'


class CreateEvent extends Component{
    state={
        title:'',
        description:'',
        date:'',
        price:0,
        eventCreated:false
    }
  
   
    createEventHandler =(event)=>{
      
        event.preventDefault();
          const title=this.state.title
          const description=this.state.description
          const date=this.state.date
          const price= +this.state.price
          const token = this.props.token

        this.props.onCreateEvent(title,description,price,date,token)
        this.setState({eventCreated:true})
        //  this.setState({eventCreated:true})
        
        //    const data={
        //         query:`
        //             mutation{
        //                 createEvents(inputEvent:{ title:"${title}", description:"${description}", price:${price},date:"${date}"}){
        //                     _id
        //                     title
        //                     description
        //                     price
        //                     date
        //                     createdBy{
        //                         _id
        //                         email
        //                     }

        //                 }
        //             }   
        //         `
        //     }

        
        // fetch('http://localhost:8000/graphql',{
        //     method:"post",
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Authorization':'Bearer '+ this.props.token

        //     }
        // })
        // .then(res=>{
        //     if(res.status !== 200 && res.status !== 201){
        //          throw new Error("Failed")
        //     }
        //     return res.json()
        // })
        // .then(resData=>{
        //     const event=resData.data.createEvents
        //     console.log(event)
        //    this.setState({eventCreated:true})
           
           
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
       
        
    }
    


    render(){
        let form=(<form>
   

        <label><input type="text" name="title" placeholder="Enter Title"  
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}
                /> 
        </label>
        <label><input type="number" name="price" placeholder="0.00"  
                    // value={this.state.price}
                    onChange={(event) => this.setState({price: event.target.value})}
                /> 
        </label>
        <label><input type="datetime-local" name="date"  
                   value={this.state.date}
                    onChange={(event) => this.setState({date: event.target.value})}
                /> 
        </label>
        <label><textarea  rows="4" name="description"
                     value={this.state.description}
                    onChange={(event) => this.setState({description: event.target.value})}
                /> 
        </label>
        <footer>
            <Button type="Normal" clicked={this.createEventHandler}>Continue</Button>
            <Button type="Orange" clicked={this.props.cancleModal}>Cancel</Button>
        </footer>  
       
    </form>)
       if(this.state.eventCreated){
           form=(
               <React.Fragment>
                    {/* <header>Continue Creating your EVENT!!</header> */}
                   <ShowEvent
                       title={this.state.title}
                       price={this.state.price}
                       date={this.state.date}
                       description={this.state.description}
                    />
                   <Button type="Orange" clicked={this.props.cancleModal}>Ok</Button>
               </React.Fragment>
           )
       }

        return(
            <div className={classes.Events}>
                    <header>Continue Creating your EVENT!!</header>

                {this.props.error}
                {form}
                
               
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        token:state.auth.token,
        error:state.event.create_error_messsage,
        eventCreated:state.event.eventCreated

    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateEvent:(title,description,price,date,token)=>dispatch(action.create_event(title,description,price,date,token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)