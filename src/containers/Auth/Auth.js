import React,{Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/UI/Buttons/Button'
import {connect} from 'react-redux'
import * as actions  from  '../../store/actions/index'
import axios from 'axios'


class Auth extends Component{
    constructor(props){
        super(props)
        this.inputRef = null;
    }
    state={
        email:'',
        password:'',
        isLogin:true,
        selectFile:null,
        file:null,
        backendImage :null,
        loaded:0
    }
      signupHadnler(event){
        event.preventDefault();
       console.log("sign up")
        const data = new FormData()
        data.append('image',this.state.selectFile)
        // axios.post("http://localhost:8000/user/image", data)
        // //   {
        // //     onUploadProgress: ProgressEvent => {
        // //        console.log(Math.round((ProgressEvent.loaded / ProgressEvent.total*100)))
        // //         this.setState({
        // //           loaded: Math.round((ProgressEvent.loaded / ProgressEvent.total*100)),
        // //       })
        // //     }  
        // // })
        // .then(resData=>{           
        //     console.log(resData)
        //     const file = resData.data.body.file
        //     this.setState({backendImage:file})
        //     console.log(file)
        // })
        // .catch(err=>{
        //     console.log("failing..............")
        //     console.log(err)
        // })
    }
  
   
    authHandler =(event)=>{
        event.preventDefault();
        localStorage.setItem('email',this.state.email)
        if(!this.state.isLogin)
        {
            const data = new FormData()
            data.append('image',this.state.selectFile)
            data.append('email',this.state.email)
            data.append('password',this.state.password)
            axios.post(`${process.env.REACT_APP_REST_API}+/user/image`, data)
            .then(resData=>{           
                console.log(resData)
                const file = resData.data.body.user.file
                this.setState({backendImage:file})
                const token = resData.data.body.token
                const expiresIn = new Date(new Date().getTime()+ 3600*1000);

                const userId=resData.data.body.user._id

                this.props.onAuth(userId, token, expiresIn, file)
                console.log(file)
            })
            .catch(err=>{
                console.log("failing..............")
                console.log(err)
            })
            
        }
        else{
        let data={
            query:`
                query {
                    login(email:"${this.state.email}", password:"${this.state.password}"){
                        userId,
                        token,
                        tokenExpiration,
                        file
                    }
                }
                
            `
        }
       
        
        fetch(process.env.REACT_APP_GRAPHQL_API,{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                 throw new Error("Failed")
            }
            return res.json()
        })
        .then(resData=>{
           console.log(resData)
            const token = resData.data.login.token
            const expiresIn = new Date(new Date().getTime()+ 3600*1000);
            const file = resData.data.login.file
            const userId=resData.data.login.userId
            console.log(file)
            this.props.onAuth(userId, token, expiresIn, file)
           
        })
        .catch(err=>{
            console.log(err)
        })
       
      }
    }
    
    SwitchSignHandler=()=>{
        this.setState(prevState=>{
            return{isLogin:!prevState.isLogin}
        })
    }

    fileSelectHandler=(event)=>{
        
        this.setState({selectFile:event.target.files[0]})
    }
   
    componentDidUpdate(prevProps,prevState){
        if(this.state.selectFile !== prevState.selectFile){
          
            if(!this.state.selectFile){
                return
            }else{
                
                const filrReader= new FileReader()
                filrReader.onload = () => {
                    this.setState({file:filrReader.result})
                };
            
                filrReader.readAsDataURL(this.state.selectFile)


            }
        }
    }

    render(){
        let form=(<form>
           
        <label><input type="text" name="email" placeholder="Enter email"  
                    value={this.state.email}
                    onChange={(event) => this.setState({email: event.target.value})}
                /> 
        </label>
        <label><input type="password" name="password" placeholder="*******"  
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}
                /> 
        </label>
        <Button type="Normal" clicked={this.authHandler} ><p>{!this.state.isLogin?'Sign Up' : 'Log in'}</p></Button>
    </form>)
       

        return(
            <div className={classes.Auth}>

                  <div>
                  <h1>Please  {!this.state.isLogin?'Sign Up' : 'Log in'}</h1>
                    {!this.state.isLogin &&  <div className={classes.imagecenter}>
                            <div className={classes.image_upload__preview}>     
                             {/* {`http://localhost:8000/uploads/images/${this.state.backendImage}`}                */}
                                {this.state.file  && <img style={{width:"13rem",height:"13rem"}} src={this.state.file} alt="Preview" />}
                                {!this.state.file && <p>Please pick an image.</p>}
                            </div>
                      </div> }
                     <input type="file" 
                       style={{ display: 'none' }}
                      onChange={this.fileSelectHandler}
                      accept=".jpg,.png,.jpeg"
                      ref={inputRef => { this.inputRef = inputRef }}
                     />
                       
                       {!this.state.isLogin && <Button 
                     clicked ={() => this.inputRef.click()} 
                       type="Orange">Select File</Button> }

                     {/* <Button 
                     clicked ={this.uploadHadnler} 
                     type="Orange">Upload</Button> */}
                    
                    
                 </div>
           
                 
             
                {form}
                <div className={classes.Swap}>
                    <Button type="Danger" clicked={this.SwitchSignHandler} >
                        {this.state.isLogin?'Sign Up' : 'Log in'}
                    </Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth:(userId, token, expiresIn,file)=>dispatch(actions.auth_start(userId, token, expiresIn, file))
    }
}

export default connect(null, mapDispatchToProps)(Auth)