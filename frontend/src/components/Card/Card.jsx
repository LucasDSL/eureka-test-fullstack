import React from 'react'
import './Card.css'
function Card(props){
  const paragraphs = [...props.content]
  return (
    <div className='card' >
        {
          paragraphs.map(item => (<a key={Math.random()} href={item.link}>{item.text}</a>))
        }
    </div>
  )
}

export default Card