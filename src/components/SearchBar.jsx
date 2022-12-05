import { useState } from 'react'

export default function SearchBar({ handleSetUserData }) {
  const [searchValue, setSearchValue] = useState('')

  function getUserData() {
    const url = `https://api.github.com/users/${searchValue}`
    fetch(url)
      .then(response => response.json())
      .then(handleSetUserData)
  }

  function handleInputValue(value) {
    setSearchValue(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getUserData()
  }

  return (
    <form>
      <label htmlFor="search-bar">Search for a GitHub username </label>
      <input
        type="text"
        id="search-bar"
        placeholder="insert username..."
        onChange={e => handleInputValue(e.target.value)}
        value={searchValue}
      />
      <button type="submit" onClick={e => handleSubmit(e)}>
        Submit
      </button>
    </form>
  )
}
