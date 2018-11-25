const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SINGLE_JOKE_TO_COMMON_JOKE_LIST':
      return [
        ...state,
        action.joke
      ]
    case 'REMOVE_SINGLE_JOKE_FROM_COMMON_JOKE_LIST':
      return state.filter(el => el.id !== action.id)
    case 'ADD_LIST_OF_JOKES_TO_COMMON_JOKE_LIST':
      return action.list
    default:
      return state
  }
}

export default jokesReducer