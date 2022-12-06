import { useEffect, useReducer } from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import RepoList from './components/RepoList'
import './App.css'
import { ACTIONS, gitReducer, initialState } from './reducer/reducer'

export default function App() {
  const [userDataR, dispatch] = useReducer(gitReducer, initialState)

  async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/${userDataR.username}/repos`)
    const repos = await response.json()
    dispatch({ type: ACTIONS.SET_USER_REPOS, payload: repos })
  }

  useEffect(() => {
    userDataR.username !== '' && fetchRepos()
  }, [userDataR.username])

  const handleSetUserData = data => dispatch({ type: ACTIONS.SET_USER_DATA, payload: data })

  const handleSetUserRepos = repo => {
    dispatch({
      type: ACTIONS.SET_USER_REPOS,
      payload: userDataR.repos.filter(item => item.name !== repo),
    })
  }

  return (
    <div className='App'>
      <SearchBar handleSetUserData={handleSetUserData} />
      <Card userDataR={userDataR} />
      <RepoList userDataR={userDataR} handleSetUserRepos={handleSetUserRepos} />
    </div>
  )
}
