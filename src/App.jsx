import { useEffect, useReducer } from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import RepoList from './components/RepoList'
import './App.css'
import { ACTIONS, gitReducer, initialState } from './reducer/reducer'

export default function App() {
  const [userDataR, dispatch] = useReducer(gitReducer, initialState)

  useEffect(() => {
    if (userDataR.username !== '')
      fetch(`https://api.github.com/users/${userDataR.username}/repos`)
        .then(response => response.json())
        .then(repos =>
          dispatch({ type: ACTIONS.SET_USER_REPOS, payload: repos })
        )
  }, [userDataR.username])

  const handleSetUserData = data =>
    dispatch({ type: ACTIONS.SET_USER_DATA, payload: data })

  const handleSetUserRepos = repo => {
    dispatch({
      type: ACTIONS.SET_USER_REPOS,
      payload: userDataR.repos.filter(item => item.name !== repo),
    })
  }

  return (
    <div className="App">
      <SearchBar handleSetUserData={handleSetUserData} />
      <Card userDataR={userDataR} />
      <RepoList userDataR={userDataR} handleSetUserRepos={handleSetUserRepos} />
    </div>
  )
}
