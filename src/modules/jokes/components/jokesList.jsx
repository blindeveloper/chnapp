import React from 'react'
import { List, Icon } from 'antd'

const AllJokesList = ({jokesList, switchFavoriteStatus}) => (
  <div>
    <List
      header={<div>All jokes list:</div>}
      bordered
      dataSource={jokesList}
      renderItem={joke => (
        <List.Item>
          {joke.joke}
          {
            !joke.isFavorite ? 
              <Icon 
                style={{fontSize: '21px', margin:'0 5px', cursor:'pointer'}}
                type="plus-circle" 
                theme="twoTone" 
                twoToneColor="#52c41a" 
                onClick={() => switchFavoriteStatus(joke)}
              /> : ''
          }
        </List.Item>
      )}
    />
  </div>
)

export default AllJokesList