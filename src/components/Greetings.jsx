import React from 'react'

function Greetings(props) {

    const {lang} = props

    const langDictionary = {
        de:"Hallo",
        fr:"Bonjour",
        es:"Holla",
        it:"Ciao",
        en:"Hello"
    }


  return (
    <div>
        Greetings
    </div>
  )
}

export default Greetings
