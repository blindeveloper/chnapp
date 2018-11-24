import React from 'react'
import { List, Icon } from 'antd'

class FavrotiteJokesList extends React.Component {
  constructor(props){
    super(props)
    this.getLocalStorageFavoriteJokesList = (cb) => {
      let localFavorites = localStorage.getItem('favoriteJokes')
      if (localFavorites) {
        localFavorites = JSON.parse(localFavorites)
        return localFavorites
      }
    }
  }

  componentWillMount() {
    console.log('this.getLocalStorageFavoriteJokesList(): ', this.getLocalStorageFavoriteJokesList());
  }

  render() {
    return <div>
    <List
      header={<div>Favorite jokes: {this.props.favoriteJokesList.length}</div>}
      bordered
      dataSource={this.props.favoriteJokesList}
      renderItem={joke => (
        <List.Item>
          {joke.joke}
          <Icon 
            style={{fontSize: '21px', margin:'0 5px', cursor:'pointer'}}
            onClick={() => {
              this.props.removeJokeFromFavoriteList(joke.id)
              this.props.addSingleJokeToCommonJokeList(joke)
            }} 
            type="close-circle" 
            theme="twoTone" 
            twoToneColor="#eb2f96"/>
        </List.Item>
      )}
    />
  </div>
  }
}

const FavrotiteJokesList2 = ({
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