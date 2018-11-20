import { connect } from 'react-redux'
import { removeJokeAction } from '../actions/jokes.actions'
import jokesList from '../components/jokesList.jsx'

const mapStateToProps = (state, ownProps) => ({
  jokesList: state.jokesListReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeJoke: id => dispatch(removeJokeAction(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)