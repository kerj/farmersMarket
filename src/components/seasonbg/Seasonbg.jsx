import React from 'react';
import SeasonImage from './4seasons.jpg';
import { makeStyles } from '@material-ui/core/styles';

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
// day = 0;
//let scroll = 1.06 * day - 360;
// let scroll = 481 - (4.25 * day);
let scroll = -47 + 4.25 * day;


const styles = makeStyles({
  seasonBox: {
    backgroundImage: `url(${SeasonImage})`,
    width: '388px',
    height: '900px',
    backgroundPositionX: scroll,
    backgroundRepeatY: 'no-repeat',
    marginLeft: 'auto',
    marginRight: 'auto'

  }
})

//396 x 900

export default function Seasonbg() {
  const classes = styles();
  return (
    <div className={classes.seasonBox}>
      
    </div>
  )
}
