import React, {Component} from "react";
import { useEffect, useState } from 'react';
// import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
// import matchSorter from 'match-sorter'

// import makeData from './makeData'
import Details from "./Details"


const Table = (props) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [popupbutton, setPopupButton] = useState(false)
  const [selecteditem, setSelectedItem] = useState()
  useEffect( () => {
    fetch(props.url,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(result=>result.json()).then(json=>setData(json));
  }, [props.url]
  )
  if (data.length == 0) {
    return <></>;
  }
  function search(){
    const inputvalue = document.getElementById('searchvalue').value
    setSearchText(inputvalue);    
  }
  function filter(product){
    if (product.model_number.includes(searchText)|| product.brand_name.includes(searchText)){
      return true
    }
  }
  
  function openpopup(product){
    setPopupButton(true)
    setSelectedItem(product)
    console.log(product)
  }
  var headers =[]
  Object.keys(data[1]).map(x=>headers.push(x))
  return(
    <div>
      <input type = "text"  id = "searchvalue"placeholder = "search by model number or brand"/>
      <button type="submit" onClick = {search}><i className="fa fa-search">Search</i></button>
      <Details trigger = {popupbutton} selecteditem = {selecteditem}/>
        <table id = {props.appliance} className = "table table-striped table-bordered table-hover table-sm">
          <thead style={{position: "sticky", top: 0}} className = "sticky-header">
            <tr id="headers">
              {headers.map(heading =><th key = {heading}>{heading}</th>)              
               } 
            </tr>
          </thead>
          <tbody>

            {data.filter(filter).map( 
              product =><tr onClick = {()=>openpopup(product)}>{headers.map(header =><td>{" "+product[header]}</td>)}</tr>)              
              }
          </tbody>

        </table>
    </div>
  )
}
export default Table;