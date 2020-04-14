export async function getGreetingName() {
  const response = await fetch(`${process.env.REACT_APP_HELLO_API}/hello`)
  const json = await response.json()
  return json.name
}
