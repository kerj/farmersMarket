import React, { Component } from 'react'
import Wheel from './TimeWheel.png'

import { makeStyles } from '@material-ui/core/styles';

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);


const useStyles = makeStyles(theme => ({
    wheel: {
      '& img' : {
        transform: `rotate(${(day * 0.986) - 30}deg)`,
        transition: '300ms linear all'
      }
    }
}));

export default function Timewheel () {
  const classes = useStyles();  
  return (
        <div className={classes.wheel}>
        <img src={Wheel} alt=""/>
      </div>  
  )
}