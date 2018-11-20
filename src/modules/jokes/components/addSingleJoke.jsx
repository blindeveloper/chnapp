import React from 'react'
import { getJokes } from '../resource/index'

const getJokeByTimer = (addSingleJoke, switchFavoriteStatus) => {
  getJokes(1, (err, data) => {
    if(err) throw err
    let joke = JSON.parse(data).value[0]
    joke.isFavorite = false
    addSingleJoke(joke)
    switchFavoriteStatus(joke.id)
  })
}

const List = ({addSingleJoke, switchFavoriteStatus}) => (
  <button type='button' onClick={() => getJokeByTimer(addSingleJoke, switchFavoriteStatus)}>add jokes by timer</button>
)

export default List