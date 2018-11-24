import React from 'react'
import { List, Icon } from 'antd'

const AllJokesList = ({
  commonJokesList, 
  addJokeToFavoriteList,
  removeJokeFromCommonList}) => (
  <div>
    <List
  header={<div>All jokes list: {commonJokesList.length}</div>}
      bordered
      dataSource={commonJokesList}
      renderItem={joke => (
        <List.Item>
          {joke.joke}
          {
            <Icon 
              style={{fontSize: '21px', margin:'0 5px', cursor:'pointer'}}
              type="plus-circle" 
              theme="twoTone" 
              twoToneColor="#52c41a" 
              onClick={() => {
                addJokeToFavoriteList(joke)
                removeJokeFromCommonList(joke.id)
              }}
            />
          }
        </List.Item>
      )}
    />
  </div>
)

export default AllJokesList