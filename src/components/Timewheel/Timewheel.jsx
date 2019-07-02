import React, { Component } from 'react'
import Wheel from './TimeWheelLg.png'

import { makeStyles } from '@material-ui/core/styles';

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
// day = 0;

const useStyles = makeStyles(theme => ({
    wheel: {
      width: '60vw',
      height: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden',
      '& img' : {
        transform: `rotate(${(day * 0.986) - 30}deg)`,
        // transition: '300ms linear all',
        marginTop: '-44vw',
        width: '60vw'
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