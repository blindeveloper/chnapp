import React from 'react'
import { List, Icon } from 'antd'

const FavrotiteJokesList = ({
  favoriteJokesList, 
  removeJokeFromFavoriteList, 
  addSingleJokeToCommonJokeList
}) => (
  <div>
    <List
      header={<div>Favorite jokes: {favoriteJokesList.length}</div>}
      bordered
      dataSource={favoriteJokesList}
      renderItem={joke => (
        <List.Item>
          {joke.joke}
          <Icon 
            style={{fontSize: '21px', margin:'0 5px', cursor:'pointer'}}
            onClick={() => {
              removeJokeFromFavoriteList(joke.id)
              addSingleJokeToCommonJokeList(joke)
            }} 
            type="close-circle" 
            theme="twoTone" 
            twoToneColor="#eb2f96"/>
        </List.Item>
      )}
    />
  </div>
)

export default FavrotiteJokesList