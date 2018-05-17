import React, { Component } from 'react'
import DonutChart from './DonutChart'


export default function Customers(props){
  return(
    <DonutChart donutChartData={props.donutChartData}/>
  )
}
