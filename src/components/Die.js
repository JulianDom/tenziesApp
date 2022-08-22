import React from 'react'
import ReactDOM from 'react-dom/client';
import '../App.css';
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
        
    }
    return (
       <div 
       className="die-box" 
       style={styles}
       onClick={props.hold}>
        <h2 className='die-num'>{props.value}</h2>
        </div>
      
    )
}