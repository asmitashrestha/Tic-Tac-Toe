import React from "react";
import TicTacToeBox from "./TicTacToeBox";
import { useState } from "react";
import { useEffect } from "react";

const TicTacToe = () => {

  const [value, setValue] = useState(Array(9).fill(''))
  const [isOTurn, setIsOTurn] = useState(true)
  const [status, setStatus] = useState('')

  const handleClick = (getCurrentValue) =>{
    let cpyValue = [...value];
    if( getWinner(cpyValue) || cpyValue[getCurrentValue]) return;
    (cpyValue[getCurrentValue]) = isOTurn ? "O" : "X";
    setIsOTurn(!isOTurn)
    setValue(cpyValue)
  }
  const getWinner = (value) =>{
    const winningPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    console.log(winningPattern);
    for(let i = 0; i < winningPattern.length ; i++){
      const [x,y,z] = winningPattern[i]
      if(value[x] && value[x] === value[y] && value[x] === value[z]){
       return value[x]
      }
    }
    return null
  }

  const reset = ()=>{
    setIsOTurn(true)
    setValue(Array(9).fill(''))
  }

  useEffect(() =>{
   if(!getWinner(value) && value.every(item => item !== '') ){
    setStatus(`This is a draw !`)
   }else if(getWinner(value)){
    setStatus(`Winner is ${getWinner(value)}`)
   }else{
    setStatus(`Next player is ${isOTurn ? 'O' : 'X'} `)
   }
  },[value,isOTurn])

  return (
    <div className="tictactoe ">
      <div className="row ">
        <TicTacToeBox onClick = {()=> handleClick(0)}  value={value[0]} />
        <TicTacToeBox onClick = {()=> handleClick(1)}   value={value[1]} />
        <TicTacToeBox onClick = {()=> handleClick(2)}   value={value[2]} />
      </div>
      <div className="row">
        <TicTacToeBox onClick = {()=> handleClick(3)}  value={value[3]}/>
        <TicTacToeBox onClick = {()=> handleClick(4)}  value={value[4]}/>
        <TicTacToeBox onClick = {()=> handleClick(5)}  value={value[5]}/>
      </div>
      <div className="row">
        <TicTacToeBox onClick = {()=> handleClick(6)}  value={value[6]}/>
        <TicTacToeBox onClick = {()=> handleClick(7)}  value={value[7]}/>
        <TicTacToeBox onClick = {()=> handleClick(8)}  value={value[8]}/>
      </div>
      <div className="winner">
        <p>{status}</p>
        {/* <p>{value}</p> */}
        <p>{isOTurn}</p>
      </div>
      <div className="restart">
        <button onClick={reset}>Restart</button>
      </div>
        </div>
  );
};

export default TicTacToe;
