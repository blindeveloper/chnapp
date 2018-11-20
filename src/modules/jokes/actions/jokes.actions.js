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

export const addToFavoriteAction = jokeId => ({
  type: 'ADD_TO_FAVORITE',
  id: jokeId
})