const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SINGLE_JOKE_TO_FAVORITE_JOKE_LIST':
      return [
        ...state,
        action.joke
      ]
    case 'ADD_LIST_OF_JOKES_TO_FAVORITE_JOKE_LIST':
      return state.concat(action.list)
    case 'REMOVE_SINGLE_JOKE_FROM_FAVORITE_JOKE_LIST':
      return state.filter(el => el.id !== action.id)
    default:
      return state
  }
}

export default jokesReducer