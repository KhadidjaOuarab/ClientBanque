import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './Component/Input'
import { useReducer } from 'react'

function App() {

  const [inputValue, setInputValue] = useState(0);
  const initialState = { outputTab: 0 }
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  

  const getValue = (d) => {
    setInputValue(d)
  }


  function reducerFunction(state, action) {
  
    switch (action.type) {
      case 'recharge':
        return { outputTab: state.outputTab + parseInt(inputValue) };
      case 'virement':
        return { outputTab: state.outputTab + parseInt(inputValue) };
      case 'tel':
        return { outputTab: state.outputTab - parseInt(inputValue) };
      default:
      
        break;
    }

  }
 
  return (
    <div>
      <div className='center'>
        <h1>Bienvenue dans l'espace client</h1>
        <h1>de votre banque</h1>
      </div>
      <p className='right'>votre solde est : {state.outputTab}</p>
      <h2 className='center'>Nos Services</h2>

      <div className='row'>
        <Input label='Recharger Votre Compte' sendValue={getValue} calculate={()=>dispatch({type:"recharge"})} />
        <Input label='Virement' sendValue={getValue} calculate={()=>dispatch({type:"virement"})} />
        <Input label='Recharge téléphone' sendValue={getValue} calculate={()=>dispatch({type:"tel"})}  />
      </div>
    </div>
  )
}

export default App
