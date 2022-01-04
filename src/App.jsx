import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './Component/Input'


function App() {

  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [inputValue3, setInputValue3] = useState(0);
  const [outputTab, setOutputTab] = useState(0)
  
  const getValue1 = (e) => {
    setInputValue1(e.target.value)

  }
  const getValue2 = (e) => {
    setInputValue2(e.target.value)

  }
  const getValue3 = (e) => {
    setInputValue3(e.target.value)

  }

  const printValue = (e) => {
    e.preventDefault()

    setOutputTab((parseInt(outputTab) + parseInt(inputValue1) + parseInt(inputValue2)) - parseInt(inputValue3))

    setInputValue1(0)
    setInputValue2(0)
    setInputValue3(0)
  }
  return (
    <div>
      <div className='center'>
        <h1>Bienvenue dans l'espace client</h1>
        <h1>de votre banque</h1>
      </div>
      <p className='right'>votre solde est : {outputTab}</p>
      <h2 className='center'>Nos Services</h2>

    <div className='row'>
      <Input label='Recharger Votre Compte' printValue={printValue} getValue={getValue1} inputVal={inputValue1} />
      <Input label='Virement' printValue={printValue} getValue={getValue2} inputVal={inputValue2} />
      <Input label='Recharge téléphone' printValue={printValue} getValue={getValue3} inputVal={inputValue3} />
    </div>
    </div>
  )
}

export default App
