import { connect } from 'react-redux'
import { addSingleJokeAction, switchFavoriteStatusAction } from '../actions/jokes.actions'
import addSingleJoke from '../components/addSingleJoke.jsx'

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSingleJoke: list => dispatch(addSingleJokeAction(list)),
  switchFavoriteStatus: joke => dispatch(switchFavoriteStatusAction(joke))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addSingleJoke)