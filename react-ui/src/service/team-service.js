import Team from "../model/team";

export default class TeamService {
  constructor(authToken) {
    this.authToken = authToken
  }

  async getTeams() {
    const response = await fetch(`${process.env.REACT_APP_HELLO_API}/api/teams`, {
      headers: {
        Authorization: `Bearer ${this.authToken}`
      }
    })
    if (!response.ok) {
      throw Error(`Request failed with status ${response.status}`)
    }

    const json = await response.json()
    return json.map((input) => new Team(input))
  }
}
