const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_JOKE':
      return [
        ...state,
        action.joke
      ]
    case 'REMOVE_FAVORITE_JOKE':
      return state.filter(el => el.id !== action.id)
    default:
      return state
  }
}

export default jokesReducer