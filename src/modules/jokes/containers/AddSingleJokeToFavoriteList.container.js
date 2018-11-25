import { connect } from 'react-redux'
import { addSingleJokeToFavoriteListAction } from '../actions/jokes.actions'
import addSingleJokeToFavoriteList from '../components/addSingleJokeToFavoriteList.jsx'
import { addFavoriteJokeToLocalStorage } from '../commonServices/FavorireJokesLocalStorageManipulation.service'

const mapStateToProps = () => {}

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