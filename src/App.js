import './App.css';
import Die from './components/Die'
import { useState } from 'react'
import {nanoid} from "nanoid"

function App() {

  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }

    return newDice
  }
  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}
  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      hold={()=> holdDice(die.id)}
      /> 
      ))

  function rollNumbers(){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
            die:
            generateNewDie()
                
            
        }))
  }

  return (
     <main> 
      <h1 className='title'>Tenzies Game</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze 
      it at its current value between rolls. </p>
      <div className="App">
        {diceElements}</div>
      <button className='roll-btn' onClick={rollNumbers}>Roll</button>
     </main>
  );
}

export default App;
