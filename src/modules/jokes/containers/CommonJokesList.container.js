import { connect } from 'react-redux'
import { addJokeToFavoriteListAction,
        removeJokeFromCommonListAction } from '../actions/jokes.actions'
import jokesList from '../components/commonJokesList.jsx'

const mapStateToProps = (state) => ({
  commonJokesList: state.jokesListReducer
})

const addFavoriteJokeToLocalStorage = (joke, cb) => {
  let localFavorites = JSON.parse(localStorage.getItem('favoriteJokes'))
  if (localFavorites && localFavorites.length > 9) return
    if (localFavorites) {
      localFavorites.push(joke)
      localStorage.setItem('favoriteJokes', JSON.stringify(localFavorites))
    } else {
      localStorage.setItem('favoriteJokes', JSON.stringify([joke]))
    }
    cb()
}

const mapDispatchToProps = (dispatch) => ({
  switchFavoriteStatus: joke => {
    addFavoriteJokeToLocalStorage(joke, () => {
      // dispatch(switchFavoriteStatusAction(joke.id))
    })
  },
  addJokeToFavoriteList: joke => dispatch(addJokeToFavoriteListAction(joke)),
  removeJokeFromCommonList: jokeId => dispatch(removeJokeFromCommonListAction(jokeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)