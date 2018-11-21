import React from 'react'
import JokesList from '../jokes/containers/JokesList.container'
import AddJokesList from '../jokes/containers/AddJokesList.container'
import FavoriteJokes from '../jokes/containers/FavoriteJokes.container'
import AddJokesListWithTimer from '../jokes/containers/AddJokesListWithTimer.container'
import { Row, Col } from 'antd'

const jokes = () => (
  <div>
    <Row type="flex" justify="center">
      <Col span={24} style={{ padding: '20px 10px' }}>
        <AddJokesList></AddJokesList>
        <AddJokesListWithTimer></AddJokesListWithTimer>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span={12} style={{ padding: '0 10px' }}>
        <JokesList></JokesList>
      </Col>
      <Col span={12} style={{ padding: '0 10px' }}>
        <FavoriteJokes></FavoriteJokes>
      </Col>
    </Row>
  </div>
)

export default jokes