import React from 'react'

const List = ({favoriteJokesList, switchFavoriteStatus}) => (
  <div>
    <h2>Favorite jokes:</h2>
    <ul>
      {favoriteJokesList.map((joke, i) => { 
        return <li key={i}>
          {joke.joke}
          <button type='button' onClick={() => switchFavoriteStatus(joke)}>remore from favorite</button>
        </li>
      })}
    </ul>
  </div>
)

export default List