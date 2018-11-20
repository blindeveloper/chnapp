import React from 'react'
import { getJokes } from '../resource/index'

const getListOfJokes = addJokesList => {
  getJokes(10, (err, data) => {
    if(err) throw err
    addJokesList(JSON.parse(data).value)
  })
}

const List = ({addJokesList}) => (
  <button type='button' onClick={() => getListOfJokes(addJokesList)}>add jokes list</button>
)

export default List