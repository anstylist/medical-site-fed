import host from './host'

export default class UserService {
  static async getUsers () {
    const response = await fetch(`${host}/users`)
    const jsonResponse = await response.json()

    return Array.isArray(jsonResponse) ? jsonResponse : []
  }

  static createUser (user) {
    return fetch(`${host}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json()
    })
  }

  static updateUser (user) {
    return fetch(`${host}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json()
    })
  }

  static deleteUser (id) {
    return fetch(`${host}/users/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      return response.json()
    })
  }
}
