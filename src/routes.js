import jokesPage from './modules/pages/JokesPage.jsx'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: jokesPage
  }
]

export default routes