import React from 'react'
import Produce from '../produce/Produce';
import { availableProduce } from '../../App';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//get object properties from App to display in the js Expression locations

let now = new Date();
let start = new Date(now).getMonth();

const styles = makeStyles({
  theBox: {
    backgroundColor: 'red'
  }
}) 

export default function Seasonbox() {
  const classes = styles();
  return (
    <div>
      <Produce
      month = {availableProduce[start].month}
      selection = {availableProduce[start].selection}
      />
      <h1 className={classes.theBox}>This {availableProduce[start].month}</h1>
    </div>
  )
}
