import React from "react";
import { useState } from "react";
import Table from "./Table"

function Option(type, url){
    this.url = url
    this.type = type
}
const fridge = new Option("fridge","https://data.energystar.gov/resource/p5st-her9.json")
const dryer = new Option("dryer","https://data.energystar.gov/resource/t9u7-4d2j.json")

const optionslist = [fridge, dryer]


const Optionscomponent = () => {
    const [Option, setOption] = useState(fridge)
    function onChangeValue(event)
    {
        console.log(event.currentTarget.value)
        var selectedoption
        for(let i =0; i < optionslist.length; i++){
            if (event.currentTarget.value == optionslist[i].type)
            selectedoption = optionslist[i]
        }
        console.log(selectedoption.type)
        setOption(selectedoption)

    }
    return(
        <div>
            <div >
            {optionslist.map(option => <><input name = "appliancetype" type ="radio" key = {option.type} value = {option.type} onChange={onChangeValue}/> {option.type}</>)
            }
            
            </div>
            <div>
                <Table url ={Option.url} appliance ={Option.type}/>
            </div>
        </div>
      )
    }

export default Optionscomponent;
