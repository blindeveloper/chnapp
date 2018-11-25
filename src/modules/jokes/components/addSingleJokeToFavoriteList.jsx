import React from 'react'
import { getJokes } from '../resource/index'
import { Button } from 'antd'

const getJokeByTimer = addSingleJokeToFavoriteList => {
  getJokes(1, (err, data) => {
    if(err) throw err
    addSingleJokeToFavoriteList(JSON.parse(data).value[0])
  })
}

const List = ({addSingleJokeToFavoriteList}) => (
  <Button onClick={() => getJokeByTimer(addSingleJokeToFavoriteList)}>add jokes by timer</Button>
)

export default List