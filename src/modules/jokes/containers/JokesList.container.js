import { connect } from 'react-redux'
import { addToFavoriteAction } from '../actions/jokes.actions'
import jokesList from '../components/jokesList.jsx'

const mapStateToProps = (state, ownProps) => ({
  jokesList: state.jokesListReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToFavorite: id => dispatch(addToFavoriteAction(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)