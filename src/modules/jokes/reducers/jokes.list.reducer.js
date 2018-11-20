const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_JOKE':
      return [
        ...state,
        {
          joke: action.joke,
          id: action.id
        }
      ]
    case 'REMOVE_JOKE':
      return state.filter(el => el.id !== action.id)
    case 'ADD_JOKE_LIST':
      return action.list
    default:
      return state
  }
}

export default jokesReducer