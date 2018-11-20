import React from 'react'

const List = ({jokesList, switchFavoriteStatus}) => (
  <div>
    <h2>All jokes list:</h2>
    <ul>
      {jokesList.map((joke, i) => { 
        return <li key={i}>
          {joke.joke}
          {
            !joke.isFavorite ? 
            <button type='button' onClick={() => switchFavoriteStatus(joke)}>add to favorite</button> : ''
          }
        </li>
      })}
    </ul>
  </div>
)

export default List