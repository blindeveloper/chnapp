import { connect } from 'react-redux'
import { addSingleJokeToFavoriteListAction } from '../actions/jokes.actions'
import { addFavoriteJokeToLocalStorage } from '../commonServices/FavorireJokesLocalStorageManipulation.service'
import addSingleJokeToFavoriteList from '../components/addSingleJokeToFavoriteList.jsx'

const mapStateToProps = state => ({
  favoriteJokesListLength: state.favoriteJokesListReducer.length
})

const mapDispatchToProps = dispatch => ({
  addSingleJokeToFavoriteList: joke => {
    addFavoriteJokeToLocalStorage(joke, () => {
      dispatch(addSingleJokeToFavoriteListAction(joke))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addSingleJokeToFavoriteList)