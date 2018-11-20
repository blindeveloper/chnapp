import React from 'react'

const List = ({addJokesList}) => (
  <button type='button' onClick={() => addJokesList([{text:'text 1', id:1},{text:'text 2', id:2}])}>add jokes list</button>
)

export default List