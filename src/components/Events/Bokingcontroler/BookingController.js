import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const catagory=['bookings','chart']
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom:20,
    //   backgroundColor:"rgb(204, 204, 204)",
    //   width:"40%",
    //   float:"right"
    }
  });
const bookingControlle = (props)=>{
     const classesStyle = useStyles();
    const index= catagory.findIndex(catIndex=>catIndex===props.value)
    return(
        <React.Fragment>
             <Paper  elevation={3} className={classesStyle.root}>
                      
                    <Tabs
                        value={index}
                        onChange={(e,index)=>
                            props.handleChange(catagory[index])
                        }
                        indicatorColor="secondary"
                        textColor="primary"
                      
                        centered={true}
                        // variant="scrollable"
                        // scrollButtons="auto"
                        // aria-label="scrollable auto tabs example"
                        
                    >
                        
                        {catagory.map(group=>
                              <Tab label={group} key={group} />
                        )}
                    </Tabs>
                    </Paper>
        </React.Fragment>
    )
}

export default bookingControlle