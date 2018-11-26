import React from 'react'
import { getJokes } from '../resource/index'
import { Switch, notification } from 'antd'

let timerId
const List = props => {
  let counter = props.favoriteJokesListLength

  const getSingleJoke = () => {
    return setInterval(function(){
      if (counter < 10 ) {
        counter++
        getJokes(1, (err, data) => {
          if(err) throw err
          props.addSingleJokeToFavoriteList(JSON.parse(data).value[0])
        })
      } else {
        notification['error']({
          message: 'Limit',
          description: 'No more then 10 jokeas allowed to add while automatic mode.',
        });
        clearInterval(timerId) 
      }
    }, props.timer * 1000)
  }

   const onChange = (checked) => {
    if (checked) {
      timerId = getSingleJoke()
    } else {
      clearInterval(timerId) 
    }
  }

  return <Switch onChange={onChange}/>
}

export default List