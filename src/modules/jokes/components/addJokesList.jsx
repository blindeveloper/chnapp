import React from 'react'
import { getJokes } from '../resource/index'
import { Button } from 'antd'

const getListOfJokes = addJokesList => {
  getJokes(10, (err, data) => {
    if(err) throw err
    addJokesList(JSON.parse(data).value)
  })
}

const List = ({addJokesList}) => (
  <Button onClick={() => getListOfJokes(addJokesList)}>Add jokes list</Button>
)

export default List