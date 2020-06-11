import React from 'react'
import { Bar, Line   } from 'react-chartjs';
import {Paper, Typography}  from "@material-ui/core"

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: -1,
    max: 30
  },
  Normal: {
    min: 30,
    max: 50
  },
  Expensive: {
    min: 50,
    max: 10000000
  }
};
const chart = (props)=>{
    const chartData ={labels:[], datasets:[]}
    let value=[]
    for(let bucket in BOOKINGS_BUCKETS){
        const chartDataByBucket = props.bookings.reduce((prevState, currentValue)=>{
            if(currentValue.event.price > BOOKINGS_BUCKETS[bucket].min &&
                currentValue.event.price < BOOKINGS_BUCKETS[bucket].max){
                    return prevState + 1
                }
            else{
                return prevState
            }    
        }, 0)
        chartData.labels.push(bucket)
         value.push(chartDataByBucket)
        chartData.datasets.push({
                label: "Bookings",
                fillColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                  ],
               
                highlightFill: [
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
                
               
                data: [value[0],value[1],value[2]]
        })

        // console.log(chartDataByBucket)
        value = [...value];
        value[value.length - 1] = 0;
        // console.log(value)

    }
    
    return(
        <div style={{marginTop:"20px"}} >
            <Paper style={{margin:"10px"}}>  
                <Bar 
                width={500}
                height={300}
               
                data={chartData} 
                />
            
                 <Typography>Bar chart</Typography>
             </Paper><br/>
             <Paper style={{margin:"10px"}}>
                <Line 
                    width={500}
                    height={300}
                    // style={{height:"300px", width:"70\"%\""}}
                    data={chartData} 
                />
            
                 <Typography>Line chart</Typography>
             </Paper>
        </div>
    )
}

export default chart