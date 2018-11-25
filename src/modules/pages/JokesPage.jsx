import React from 'react'
import CommonJokesList from '../jokes/containers/CommonJokesList.container'
import AddJokesListToCommonJokeList from '../jokes/containers/AddJokesList.container'
import FavoriteJokesList from '../jokes/containers/FavoriteJokesList.container'
import AddSingleJokeToFavoriteList from '../jokes/containers/AddSingleJokeToFavoriteList.container'
import { Row, Col } from 'antd'

const jokes = () => (
  <div>
    <Row type="flex" justify="center">
      <Col span={24} style={{ padding: '20px 10px' }}>
        <AddJokesListToCommonJokeList></AddJokesListToCommonJokeList>
        Add joke by timer: <AddSingleJokeToFavoriteList timer={1}></AddSingleJokeToFavoriteList>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span={12 } style={{ padding: '0 10px' }}>
        <CommonJokesList></CommonJokesList>
      </Col>
      <Col span={12} style={{ padding: '0 10px' }}>
        <FavoriteJokesList></FavoriteJokesList>
      </Col>
    </Row>
  </div>
)

export default jokes