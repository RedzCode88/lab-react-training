import React from 'react'
import { Button } from 'react-bootstrap'

function BoxColor(props) {

    const {r, g, b}=props
    const toHex = (color) => color.toString(16)

    const hexColor = `${toHex(r)}${toHex(g)}${toHex(b)}`
    
  return (
    <div className='box-color' style={{backgroundColor: hexColor}}>

        <div>{`rgb(${r})`}</div>
        <div>{hexColor}</div>
      
    </div>
  )
}

export default BoxColor
