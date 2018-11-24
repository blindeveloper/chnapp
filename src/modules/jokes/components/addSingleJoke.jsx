import React from 'react'
import { getJokes } from '../resource/index'
import { Button } from 'antd'

const getJokeByTimer = (addSingleJoke) => {
  // getJokes(1, (err, data) => {
  //   if(err) throw err
  //   let joke = JSON.parse(data).value[0]
  //   joke.isFavorite = false
  //   addSingleJoke(joke)
  // })
}

const List = ({addSingleJoke}) => (
  <Button onClick={() => getJokeByTimer(addSingleJoke)}>add jokes by timer</Button>
)

export default List