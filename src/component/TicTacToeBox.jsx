import React from 'react'

const TicTacToeBox = ({value,onClick}) => {
  return (
    <button className='container '
    onClick={onClick}>
      {value}
    </button>
  )
}

export default TicTacToeBox
