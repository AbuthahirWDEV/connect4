import React from 'react';
import GameCircle from './GameCircle';

const GameBoard = () => {
  return (
    <div>
        <GameCircle id={1} color='red'>
            Red
        </GameCircle>
        <GameCircle id={2} color='blue'>
            Blue
        </GameCircle>
        <GameCircle id={3} color='red'>
            Red
        </GameCircle>
        <GameCircle id={4} color='blue'>
            Blue
        </GameCircle>
        <GameCircle id={5} color='red'>
            Red
        </GameCircle>
        <GameCircle id={6} color='blue'>
            Blue
        </GameCircle>
        <GameCircle id={7} color='red'>
            Red
        </GameCircle>
        <GameCircle id={8} color='blue'>
            Blue
        </GameCircle>
    </div>
  )
}

export default GameBoard;