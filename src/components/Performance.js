import React, { Component } from 'react';
import PaginationTable from './PaginationTable';

export default function Performance(props){
  return(
    <PaginationTable Tabledata={props.Tabledata}/>
  )
}
