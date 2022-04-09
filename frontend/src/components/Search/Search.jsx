import React from 'react'
import "./Search.css"
import { useState } from 'react';
import Card from '../Card/Card';
import getData from "./getData"

function Search() {
  let cardDefault = <Card option="default" />
  const [currentCard, setCurrentCard] = useState(cardDefault)
  const [inputCEP, setInput] = useState(' ')
  
  function getInput(event) {
    setInput(event.target.value)
  }

  async function getDataFromAPIChangeCard() {
    const cepForSearching = inputCEP.replace(/\D/g, '')
    if(cepForSearching.length !== 8) {
      return invalidCepProvided()
    }
    const dataFromLocal = await getData(cepForSearching)
    if(!dataFromLocal) {
      return invalidCepProvided()
    }
    cardDefault = <Card option='search' info={dataFromLocal}/>
    setCurrentCard(cardDefault)
  }
  

  function invalidCepProvided() {
    cardDefault  = <Card option='invalid' />
    return setCurrentCard(cardDefault)
  }

  return (
    <div className='search'>
        <div className='typeCEP'>
            <input onChange={getInput}title='Digite aqui seu CEP' type="string" placeholder="48.020-620"/>
            <button onClick={getDataFromAPIChangeCard}>Buscar</button>
        </div>
        <div>
          {currentCard}
        </div>
    </div>
  )
}

export default Search