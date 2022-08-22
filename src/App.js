import './App.css';
import Die from './components/Die'
import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You Won!")
    }

  }, dice) 

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
        if (!tenzies) {
          
          setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
              die:
              generateNewDie()
                
            }))
          } else {
            setTenzies(false)
            setDice(allNewDice())
          }

  }


  return (
     <main> 
      {tenzies && <Confetti width={1500} height={700} />}

      <h1 className='title'>Tenzies Game</h1>

      <p className='instructions'>Roll until all dice are the same. Click each die to freeze 
      it at its current value between rolls. </p>
      <div className="App">
        {diceElements}
        
        </div>

      <button className='roll-btn' onClick={rollNumbers}>{tenzies ? "New Game" : "Roll"}</button>
     </main>
  );
}

export default App;
