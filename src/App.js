import './App.css';
import Die from './components/Die'
import { useState } from 'react'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random()* 6))
    }
    return newDice
  }
  
  const diceElements = dice.map(die => <Die value={die} /> )

  return (
    <div className="App">
     <main> 
     {diceElements}
      
     
     </main>
    </div>
  );
}

export default App;
