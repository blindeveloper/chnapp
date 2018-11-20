import React from 'react'

const List = ({jokesList, removeJoke}) => (
  <ul>
    {jokesList.map((joke, i) => { 
      return <li key={i}>
        {joke.joke}
        <button type='button' onClick={() => removeJoke(joke.id)}>delete</button>
      </li>
    })}
  </ul>
)

export default List