export const addSingleJokeAction = newJoke => ({
  type: 'ADD_NEW_JOKE',
  joke: newJoke
})

export const addJokesListAction = jokesList => ({
  type: 'ADD_JOKE_LIST',
  list: jokesList
})

export const switchFavoriteStatusAction = jokeId => ({
  type: 'SWITCH_FAVORITE_STATUS',
  id: jokeId
})