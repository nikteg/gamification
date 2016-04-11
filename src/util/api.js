const token = localStorage.getItem('token')

const jsonify = function(resp) {
  return resp.json()
}

const handleErrors = function(resp) {
  return jsonify(resp).then(json => {
    if (resp.status !== 200) {
      const error = new Error(json.message || '')
      error.status = resp.status

      console.error('API ERROR:', error)
      throw error
    }

    return json
  })
}

export const login = function(username, password) {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  .then(handleErrors)
  .then(json => {
    if (json.token) {
      localStorage.setItem('token', json.token)
    }

    return json
  })
}

export const register = function(username, password) {
  return fetch('/api/auth/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  .then(handleErrors)
  .then(json => {
    if (json.token) {
      localStorage.setItem('token', json.token)
    }

    return json
  })
}

export const getUser = function(username) {
  return fetch(`/api/users/${username}`, {
    headers: {
      'Accept': 'application/json',
    },
  })
  .then(handleErrors)
}

export const getUsers = function(username) {
  return fetch(`/api/users`, {
    headers: {
      'Accept': 'application/json',
    },
  })
  .then(handleErrors)
}
