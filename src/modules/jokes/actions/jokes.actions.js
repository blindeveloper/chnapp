let jokesCounter = 0

export const addNewJokeAction = jokeText => ({
  type: 'ADD_NEW_JOKE',
  joke: jokeText,
  id: jokesCounter++
})

export const addJokesListAction = jokesList => ({
  type: 'ADD_JOKE_LIST',
  list: jokesList
})

export const switchFavoriteStatusAction = jokeId => ({
  type: 'SWITCH_FAVORITE_STATUS',
  id: jokeId
})