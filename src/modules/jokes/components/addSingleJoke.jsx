import React from 'react'
import { getJokes } from '../resource/index'
import { Button } from 'antd'

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
  <Button onClick={() => getJokeByTimer(addSingleJoke, switchFavoriteStatus)}>add jokes by timer</Button>
)

export default List