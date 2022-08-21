import './App.css';
import Die from './components/Die'
import { useState } from 'react'
import {nanoid} from "nanoid"

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value:Math.ceil(Math.random()* 6), 
        isHeld: false,
        id:nanoid(),
      
      })
    }

    return newDice
  }
  
  function holdDice(id) {
    console.log(id)
  }
  const diceElements = dice.map(die => 
  <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={()=>holdDice(die.id)}/> )

  function rollNumbers(){
    setDice(allNewDice())
  }

  return (
     <main> 
      <div className="App">
        {diceElements}</div>
      <button className='roll-btn' onClick={rollNumbers}>Roll</button>
     </main>
  );
}

export default App;
