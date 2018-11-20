import React, {Component} from 'react'

const List = ({jokesList, addToFavorite}) => (
  <ul>
    {jokesList.map((joke, i) => { 
      return <li key={i}>
        {joke.joke}
        isFavorite: {joke.isFavorite + ''}
        <button type='button' onClick={() => addToFavorite(joke.id)}>delete</button>
      </li>
    })}
  </ul>
)

export default List