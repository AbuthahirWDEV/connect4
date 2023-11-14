import React from 'react';

const onClick = (id) => {
    alert('clicked ' + id);
}

const GameCircle = ( {id , children , color} ) => {
  return (
    <div
     style={{backgroundColor: color}}
     onClick={() => onClick(id)}> 
        {children}
    </div>
  )
}

export default GameCircle;