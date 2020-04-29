import React, {useEffect, useState} from "react";
import {getGreetingName} from "../service/hello-service";
import {useAuth0} from "../react-auth0-spa";

export default function Greeting() {
  const [name, setName] = useState("Guest");
  const { isAuthenticated, getTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    const fetchToken = async () => {
      const token = await getTokenSilently();
      try {
        const nameResult = await getGreetingName(token)
        setName(nameResult)
      }
      catch (error) {
        console.error("Failed to load from API!", error)
      }
    }
    fetchToken()
  },[isAuthenticated, getTokenSilently]);

  return (
    <React.Fragment>Hello {name}!</React.Fragment>
  )
}
