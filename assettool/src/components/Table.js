import React, {Component} from "react";
import { useEffect, useState } from 'react';
// import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
// import matchSorter from 'match-sorter'

// import makeData from './makeData'


const Table = (props) => {
  const [data, setData] = useState([]);
  console.log(props)
  useEffect( () => {
    fetch(props.url,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(result=>result.json()).then(json=>setData(json));
  }, []
  )
  if (data.length == 0) {
    return <></>;
  }
  var headers =[]
  Object.keys(data[1]).map(x=>headers.push(x))
  // let newdata = data.filter(product => should_product_be_visible(product).map(product =><some_html>)
  //     let basketballPlayers = students.filter(function (student) {
  //       return student.sports === "Basketball";
  //   }).map(function (student) {
  //       return student.name;
  return(
    <div>
      <p>{props.appliance}</p>
        <table id = {props.appliance} class = "table table-striped table-bordered table-hover table-sm">
          <thead style={{position: "sticky", top: 0}} class = "sticky-header">
            <tr id="headers">
              {headers.map(heading =><th>{heading}</th>)              
               } 
            </tr>
          </thead>
          <tbody>
            {data.map( 
              product =><tr>{headers.map(header =><td>{" "+product[header]}</td>)}</tr>)              
              } 
          </tbody>
        </table>
    </div>
  )
}
export default Table;