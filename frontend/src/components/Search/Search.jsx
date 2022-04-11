import React from 'react'
import "./Search.css"
import { useState } from 'react';
import Card from '../Card/Card';
import getData from "./getData"

function Search() {
  let cardDefault = <Card option="default" />
  const [currentCard, setCurrentCard] = useState(cardDefault)
  const [inputCEP, setInput] = useState('')
  
  function changeCard(option, info=undefined) {
    if(info) {
      cardDefault = <Card option={option} info={info}/>
      return setCurrentCard(cardDefault)
    }
    cardDefault = <Card option={option} />
    return setCurrentCard(cardDefault)
  }

  function getInput(event) {
    setInput(`${event.target.value}`)
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
    changeCard('search', dataFromLocal)
  }
  

  function invalidCepProvided() {
    return changeCard('invalid')
  }

  return (
    <div className='search'>
        <div className='typeCEP'>
            <input onChange={getInput} title='Digite aqui seu CEP' type="number" placeholder="48020620" required />
            <button onClick={getDataFromAPIChangeCard}>Buscar</button>
        </div>
        <div>
          {currentCard}
        </div>
    </div>
  )
}

export default Search