import { connect } from 'react-redux'
import favoriteJokesList from '../components/favoriteJokesList.jsx'
import { removeJokeFromFavoriteListAction, 
        addSingleJokeToCommonJokeListAction } from '../actions/jokes.actions'

const removeFavoriteJokeFromLocalStorage = (joke, cb) => {
  let localFavorites = localStorage.getItem('favoriteJokes')
    if (localFavorites) {
      localFavorites = JSON.parse(localFavorites)
      localFavorites = localFavorites.filter(el => el.id !== joke.id)
      localStorage.setItem('favoriteJokes', JSON.stringify(localFavorites))
    } else {
      localStorage.setItem('favoriteJokes', JSON.stringify([joke]))
    }
    cb()
}

const mapStateToProps = state => ({
  favoriteJokesList: state.favoriteJokesListReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchFavoriteStatus: joke => {
    removeFavoriteJokeFromLocalStorage(joke, () => {
      // dispatch(switchFavoriteStatusAction(joke.id))
    })
  },
  removeJokeFromFavoriteList: jokeId => dispatch(removeJokeFromFavoriteListAction(jokeId)),
  addSingleJokeToCommonJokeList: joke => dispatch(addSingleJokeToCommonJokeListAction(joke))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(favoriteJokesList)