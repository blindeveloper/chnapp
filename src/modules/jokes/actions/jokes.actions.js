let jokesCounter = 0

export const addNewJokeAction = jokeText => ({
  type: 'ADD_NEW_JOKE',
  text: jokeText,
  id: jokesCounter++
})

export const addJokesListAction = jokesList => ({
  type: 'ADD_JOKE_LIST',
  list: jokesList
})

export const removeJokeAction = jokeId => ({
  type: 'REMOVE_JOKE',
  id: jokeId
})