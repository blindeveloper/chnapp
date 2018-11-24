export const addSingleJokeToCommonJokeListAction = newJoke => ({
  type: 'ADD_SINGLE_JOKE_TO_COMMON_JOKE_LIST',
  joke: newJoke
})

export const addListOfJokesToCommonJokeListAction = jokesList => ({
  type: 'ADD_LIST_OF_JOKES_TO_COMMON_JOKE_LIST',
  list: jokesList
})

export const addJokeToFavoriteListAction = joke => ({
  type: 'ADD_FAVORITE_JOKE',
  joke: joke
})

export const removeJokeFromFavoriteListAction = jokeId => ({
  type: 'REMOVE_FAVORITE_JOKE',
  id: jokeId
})

export const removeJokeFromCommonListAction = jokeId => ({
  type: 'REMOVE_JOKE_FROM_COMMON_LIST',
  id: jokeId
})