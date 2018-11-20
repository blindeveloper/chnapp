import React from 'react'
import JokesList from '../jokes/containers/JokesList.container'
import AddJokesList from '../jokes/containers/AddJokesList.container'

const jokes = () => (
  <div>
    <AddJokesList></AddJokesList>
    <JokesList></JokesList>
  </div>
)

export default jokes