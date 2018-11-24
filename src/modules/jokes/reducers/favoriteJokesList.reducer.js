const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_JOKE':
      return [
        ...state,
        action.joke
      ]
    case 'ADD_LIST_OF_JOKES_TO_FAVORITE_JOKE_LIST':
      return state.concat(action.list)
    case 'REMOVE_FAVORITE_JOKE':
      return state.filter(el => el.id !== action.id)
    default:
      return state
  }
}

export default jokesReducer