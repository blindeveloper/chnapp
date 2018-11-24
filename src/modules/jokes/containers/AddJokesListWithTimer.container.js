import { connect } from 'react-redux'
import { addSingleJokeToCommonJokeListAction } from '../actions/jokes.actions'
import addSingleJoke from '../components/addSingleJoke.jsx'

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSingleJoke: list => dispatch(addSingleJokeToCommonJokeListAction(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addSingleJoke)