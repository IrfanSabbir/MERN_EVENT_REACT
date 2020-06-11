import  React from 'react'
import Avatar from '../../assets/irfan.jpg'
import classes from './Developer.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Upwork from './logo-upwork.jpg'
import LinkedIn from './linked in.png'
import GitHub from './github.jpg'
import Fb from './fb.png'

import Card from './Card/Card'

import  BurgerImage from './burger.png'
import  EventImage from './event.png'
import  ChatImage from './chat.png'
import  ShopImage from './nodeShop.png'
import  Git from './git.png'





const developer = ()=>{
    return(
     <div className={classes.Box}>
        <Grid container spacing={3}>
           <Grid item  sm={12} md={4} >
               <img className={classes.Avatar} src={Avatar} alt="Irfan's Avatar"/>
           </Grid>
           <Grid item  sm={12} md={8} >
              
                   <h1>Mohammed Irfan Uddin</h1>
                  
                   <Typography variant="h6" color="primary" gutterBottom>
                          MERN STACK & JAVASCRIPT DEVELOPER 
                   </Typography>
            
              
               <Typography variant="body2"  color="inherit" gutterBottom>
                 I am JavaScript and MERN STACK Developer with 2 year of intern and more than 2 years of developing experiencing. I have become experienced in react.js, node.js, Mongodb, Express, GraphQL, My sql, Rest Api, Redux and also core Java Script.   
                 My program Solving skill took me to a level of understanding a problem, Data structure, Algorithm and being analytics at the same time.
                </Typography>
               
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body2" color="error">Top Skills: </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">JavaScript </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">Node.js </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">React.js </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">Express </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">MongoDb </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">Mongoose </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">Redux </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">PhotoShop </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">Illustrator </Typography>
           </Grid>
           <Grid item  sm={2} md={1}>
                  <Typography variant="body1" color="primary">PowerPoint </Typography>
           </Grid>

           <Grid item  sm={12} md={12}>
           
               <Typography variant="h6" color="secondary">My Projects....!</Typography>
           </Grid>


           <Grid item  sm={12} md={4} >
             <Card title="Burger app"
              description="I have used React, Redux and Firebase auth In this Project. You can dynamically create a burger with ingredients and order it. Its Dynamic and Single page application"
              url ="https://react-burger-builder-84888.web.app/"
              image={BurgerImage}
              user="a@g.com"
              password="123456"
             />
           </Grid>
           <Grid item  sm={12} md={4} >
            <Card title="Event Booking"
              description="Its a MERN STACK project. I have used Node.js, React, Express, GraphQl , Mongoose, MongoDb, RestApi, Redux and Json Web Token auth In this Project. You can create , book  and manage a event. It has payment system integrated."
              url ="https://irfan-shop-app.herokuapp.com/"
              image={EventImage}
              user="test@gmail.com"
              password="12345"
              />
           </Grid>
           <Grid item  sm={12} md={4} >
              <Card title="Chat App"
              description="Its a Real Time Chat app using Node.js and Socket.io. You can chat witth anyone. Create a room and add you name. Share the room name with firend and family. You can share your location."
              url ="https://irfan-chat-app-v1.herokuapp.com/"
              image={ChatImage}

             />

           </Grid>
           <Grid item  sm={12} md={4} >
           <br/>
              <Card title="Shop App"
              description="Its a core node.js shop app. I have used node.js expreess, mongoose, express-session. Here i have followed top level authontication and authorization."
             url ="https://irfan-shop-app.herokuapp.com/"
             image={ShopImage}
             user="t@t.com"
              password="12345"

              />
           </Grid>
           <Grid item  sm={12} md={4} >
           <br/>
              <Card title="GitHub Repositories"
              description="Here You can find all the Repositories. Some of the app i haven't deployed yet. The source code and project link is here."
             url ="https://github.com/IrfanSabbir?tab=repositories"
             image={Git}
              />
           </Grid>
      
           <Grid item  sm={12} md={12}>
           <br/>
               <Typography variant="h6">Find me on....!</Typography>
           </Grid>
       
           <Grid item  sm={12} md={3} >
               <Paper className={classes.Sub_Box}>
                  <Link href="https://www.upwork.com/o/profiles/users/~01ea722a1836be1a22/?s=1110580755107926016" target="_blank">
                   <img className={classes.logo} src={Upwork} alt="Upwork"/><br/>

                    </Link>   
               </Paper>
           </Grid>
           <Grid item  sm={12} md={3} >
           <Paper className={classes.Sub_Box}>
                <Link href="https://www.linkedin.com/in/irfan-sabbir/" target="_blank">
                     <img className={classes.logo} src={LinkedIn} alt="Upwork"/><br/>
                </Link>   
               </Paper>
           </Grid>
           <Grid item  sm={12} md={3} >
           <Paper className={classes.Sub_Box}>
                <Link href="https://github.com/IrfanSabbir" target="_blank">
                     <img className={classes.logo} src={GitHub} alt="Upwork"/><br/>
                </Link>  
            </Paper>    
           </Grid>
           <Grid item  sm={12} md={3} >
           <Paper className={classes.Sub_Box}>
                <Link href="https://www.facebook.com/profile.php?id=100009609794349" target="_blank">
                     <img className={classes.logo} src={Fb} alt="Upwork"/><br/>
                </Link>  
            </Paper>    
           </Grid>

           <Grid item  sm={12} md={4} >
               <br/> <br/>
           <Typography  variant="h6" color="primary">Contact Info</Typography>
           </Grid>
           <Grid item  sm={12} md={4} >
                 <Paper>
                 <br/>
                  <Typography  variant="body1" color="primary">Email : </Typography>
                  <Typography  variant="h6" color="error">avoidirfan@gmail.com </Typography>
                  </Paper>
           </Grid>
           <Grid item  sm={12} md={4} >
               <Paper>
               <br/>
                <Typography  variant="body1" color="primary">Phone : </Typography>
                <Typography  variant="h6" color="error">01625-793437 </Typography>
                </Paper>
           </Grid>
            
         </Grid><br/>
        
     </div>
     )
}

export default developer