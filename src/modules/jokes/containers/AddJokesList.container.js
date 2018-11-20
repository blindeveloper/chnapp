import { connect } from 'react-redux'
import { addJokesListAction } from '../actions/jokes.actions'
import addJokesList from '../components/addJokesList.jsx'

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addJokesList: list => dispatch(addJokesListAction(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addJokesList)