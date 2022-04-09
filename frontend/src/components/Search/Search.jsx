import React from 'react'
import "./Search.css"
import axios from 'axios';

function Search() {
  return (
    <div className='search'>
        <div className='typeCEP'>
            <input title='Digite aqui seu CEP' type="number" placeholder="48020620"/>
            <button>Buscar</button>
        </div>
    </div>
  )
}

export default Search