import React from 'react';
import { useState } from "react";


function Details(props){
    const [trigger, setTrigger] = useState(props.trigger)
    const [selectedItem, setSelectedItem] = useState(props.selecteditem)
    // console.log(props.trigger)
    // console.log(trigger)
    return (props.trigger) ? (
        <div class = "Details">
            <div class="modal-bg"></div>
            <label for="modal" className="modal-bg"></label>
            <div class="modal-content">
                <label for="modal" className="close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </label>
                <header>
                    {Object.keys(props.selecteditem).map(attribute=><p>{attribute}: {Object.values(props.selecteditem[attribute])}</p>)}
                </header>
                <footer>
                    <label for="modal" class="button danger">Decline</label>
                </footer>
            </div>

        </div>
    ):"hi";
}

export default Details

