const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_JOKE':
      return [
        ...state,
        action.joke
      ]
    case 'SWITCH_FAVORITE_STATUS':
      return state.map(el => {
        if (el.id === action.id) {
          el.isFavorite = !el.isFavorite
        }
        return el
      })
    case 'REMOVE_JOKE':
      return state.filter(el => el.id !== action.id)
    case 'ADD_JOKE_LIST':
      return action.list.map(el => {
        el.isFavorite = false
        return el
      })
    default:
      return state
  }
}

export default jokesReducer