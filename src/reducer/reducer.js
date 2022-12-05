export const ACTIONS = {
  SET_USER_DATA: 'data-setted',
  SET_USER_REPOS: 'repos-setted',
}

export const initialState = {
  username: '',
  avatar: '',
  numberRepos: 0,
  repos: [],
}

export function gitReducer(states, action) {
  switch (action.type) {
    case ACTIONS.SET_USER_DATA: {
      return {
        ...states,
        // set data
        username: action.payload.login,
        avatar: action.payload.avatar_url,
        numberRepos: action.payload.public_repos,
      }
    }
    case ACTIONS.SET_USER_REPOS: {
      return {
        ...states,
        // set repos
        repos: action.payload,
      }
    }
    default:
      throw new Error('Error at reducer function')
  }
}
