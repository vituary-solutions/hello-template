export async function getGreetingName(authToken) {
  const response = await fetch(`${process.env.REACT_APP_HELLO_API}/api/names/world`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  if (!response.ok) {
    throw Error(`Request failed with status ${response.status}`)
  }
  const json = await response.json()
  return json.name
}

export default class HelloService {
  constructor(authToken) {
    this.authToken = authToken
  }

  async getGreetingName() {
    return await getGreetingName(this.authToken)
  }
}
