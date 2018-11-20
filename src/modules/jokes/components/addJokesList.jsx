import React, {Component} from 'react'
import { getJokesList } from '../resource/index'

const getListOfJokes = addJokesList => {
  getJokesList((err, data) => {
    if(err) throw err
    addJokesList(JSON.parse(data).value)
  })
}

const List = ({addJokesList}) => (
  <button type='button' onClick={() => getListOfJokes(addJokesList)}>add jokes list</button>
)

export default List