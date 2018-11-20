import React from 'react'
import JokesList from '../jokes/containers/JokesList.container'
import AddJokesList from '../jokes/containers/AddJokesList.container'
import FavoriteJokes from '../jokes/containers/FavoriteJokes.container'
import AddJokesListWithTimer from '../jokes/containers/AddJokesListWithTimer.container'
import { Layout, Row, Col } from 'antd'

const jokes = () => (
  <div>
    <Row type="flex" justify="center">
      <Col span={24}>
        <AddJokesList></AddJokesList>
        {/* <AddJokesListWithTimer></AddJokesListWithTimer> */}
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span={12}>
        <JokesList></JokesList>
      </Col>
      <Col span={12}>
        <FavoriteJokes></FavoriteJokes>
      </Col>
    </Row>
  </div>
)

export default jokes