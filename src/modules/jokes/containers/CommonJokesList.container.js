import { connect } from 'react-redux'
import { addSingleJokeToFavoriteListAction,
        removeSingleJokeFromCommonJokeListAction } from '../actions/jokes.actions'
import jokesList from '../components/commonJokesList.jsx'
import { addFavoriteJokeToLocalStorage } from '../commonServices/FavorireJokesLocalStorageManipulation.service'

const mapStateToProps = state => ({
  commonJokesList: state.jokesListReducer
})

const mapDispatchToProps = dispatch => ({
  addJokeToFavoriteList: joke => {
    addFavoriteJokeToLocalStorage(joke, () => {
      dispatch(addSingleJokeToFavoriteListAction(joke))
    })
  },
  removeJokeFromCommonList: jokeId => dispatch(removeSingleJokeFromCommonJokeListAction(jokeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)