import React from 'react'

function Random(props) {

    const{min, max} = props

    // Recebram entre 6 e 8

    const valorFinal = Math.floor(Math.random * (min - max + 1) + min)

    //Roadmap para chegar ao valor aleatorio
    //0-1 -> Math.random()
    //0-4.999 -> Math.random() * 5
    //0-4 -> Math.floor(Math.random() * 5)
    //3-7 -> Math.floor(Math.random() * 5) + 3



  return (
    <div>
      Random - {valorFinal}
    </div>
  )
}

export default Random
