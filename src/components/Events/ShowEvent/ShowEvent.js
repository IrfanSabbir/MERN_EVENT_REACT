import React from 'react'
import classes from './ShowEvent.css'


const showEvent =(props)=>(
    <div className={classes.ShowEvent}>
        <h2>Event title: {props.title}</h2>
        <p>Event Price: {props.price}</p>
        <p>Event date: {props.date}</p>
        <p>Description:<br/> {props.description}</p>
    </div>
)

export default showEvent
