import { connect } from 'react-redux'
import { addListOfJokesToCommonJokeListAction } from '../actions/jokes.actions'
import addJokesList from '../components/addJokesListToCommonList.jsx'

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => ({
  addListOfJokesToCommonJokeList: list => dispatch(addListOfJokesToCommonJokeListAction(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addJokesList)