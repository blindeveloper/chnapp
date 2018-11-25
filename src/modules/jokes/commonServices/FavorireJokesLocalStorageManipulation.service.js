export const addFavoriteJokeToLocalStorage = (joke, cb) => {
  let localStorageFavoriteJokeList = JSON.parse(localStorage.getItem('favoriteJokes'))
  if (localStorageFavoriteJokeList) {
    localStorageFavoriteJokeList.push(joke)
    localStorage.setItem('favoriteJokes', JSON.stringify(localStorageFavoriteJokeList))
  } else {
    localStorage.setItem('favoriteJokes', JSON.stringify([joke]))
  }
  cb()
}