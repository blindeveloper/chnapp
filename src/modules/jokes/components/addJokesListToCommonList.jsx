import React from 'react'
import { getJokes } from '../resource/index'
import { Button } from 'antd'

const getListOfJokes = addJokesList => {
  getJokes(10, (err, data) => {
    if(err) throw err
    addJokesList(JSON.parse(data).value)
  })
}

const List = ({addListOfJokesToCommonJokeList}) => (
  <Button style={{marginRight: '10px'}} onClick={() => getListOfJokes(addListOfJokesToCommonJokeList)}>Add jokes list</Button>
)

export default List