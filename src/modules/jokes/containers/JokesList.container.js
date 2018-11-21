import { connect } from 'react-redux'
import { switchFavoriteStatusAction } from '../actions/jokes.actions'
import jokesList from '../components/jokesList.jsx'

const mapStateToProps = (state, ownProps) => ({
  jokesList: state.jokesListReducer
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchFavoriteStatus: joke => {
    addFavoriteJokeToLocalStorage(joke, () => {
      dispatch(switchFavoriteStatusAction(joke.id))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)