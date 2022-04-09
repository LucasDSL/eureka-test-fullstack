import React from 'react'
import Card from '../Card/Card'
import './Footer.css'

function Footer() {
  const arrayContent = [
    {
    text: 'Made by @LucasDSL', 
    link: 'https://github.com/LucasDSL/eureka-test-fullstack'
    }, 
    {
    text: 'For Eureka Labs', 
    link: 'https://eurekalabs.com.br/'
    }]
    
  return (
    <div className="footer">
      <Card contentFooter={arrayContent} />
    </div>
  )
}

export default Footer