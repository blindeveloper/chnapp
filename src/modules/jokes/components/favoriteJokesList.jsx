import React from 'react'
import { List, Icon } from 'antd'

const FavrotiteJokesList = ({favoriteJokesList, switchFavoriteStatus}) => (
  <div>
    <List
      header={<div>Favorite jokes:</div>}
      bordered
      dataSource={favoriteJokesList}
      renderItem={joke => (
        <List.Item>
          {joke.joke}
          <Icon 
            style={{fontSize: '21px', margin:'0 5px', cursor:'pointer'}}
            onClick={() => switchFavoriteStatus(joke)} 
            type="close-circle" 
            theme="twoTone" 
            twoToneColor="#eb2f96"/>
        </List.Item>
      )}
    />
  </div>
)

export default FavrotiteJokesList