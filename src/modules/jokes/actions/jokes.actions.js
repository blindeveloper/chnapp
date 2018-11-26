export const addSingleJokeToCommonJokeListAction = newJoke => ({
  type: 'ADD_SINGLE_JOKE_TO_COMMON_JOKE_LIST',
  joke: newJoke
})

export const addSingleJokeToFavoriteListAction = joke => ({
  type: 'ADD_SINGLE_JOKE_TO_FAVORITE_JOKE_LIST',
  joke: joke
})

export const addListOfJokesToCommonJokeListAction = jokesList => ({
  type: 'ADD_LIST_OF_JOKES_TO_COMMON_JOKE_LIST',
  list: jokesList
})

export const addListOfJokesToFavoriteJokeListAction = jokesList => ({
  type: 'ADD_LIST_OF_JOKES_TO_FAVORITE_JOKE_LIST',
  list: jokesList
})


export const removeSingleJokeFromFavoriteJokeListAction = jokeId => ({
  type: 'REMOVE_SINGLE_JOKE_FROM_FAVORITE_JOKE_LIST',
  id: jokeId
})

export const removeSingleJokeFromCommonJokeListAction = jokeId => ({
  type: 'REMOVE_SINGLE_JOKE_FROM_COMMON_JOKE_LIST',
  id: jokeId
})