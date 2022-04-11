import React from 'react'
import './Card.css'
function Card(props){
  if(props.option === 'default') {
    return (
    <div className='card' >
      <p>Busque um CEP acima!</p>
    </div>)
  } 
  if(props.option === 'search') {
    const info = props.info
    return (
      <div className='card'>
          <p>{info.neighborhood ? 'Bairro: ' + info.neighborhood : 'Microcidade sem bairros cadastrados.'}</p>
          <p>{info.patio}</p>
          <p>{info.city + ' - ' + info.stateAcronym} </p>
          <p></p>
      </div>
    )
  }
  if(props.option === 'invalid') {
    return (
      <div className='card'>
        <p> CEP inválido. </p>
        <p>Tente novamente!</p>
      </div>
    )
  } 
  const paragraphs = [...props.contentFooter]
  return (
    <div className='card' >
        {
          paragraphs.map(item => (<a key={Math.random()} href={item.link}>{item.text}</a>))
        }
    </div>
  )
}

export default Card