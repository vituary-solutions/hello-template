import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/application-context";

export default function Greeting() {
  const [name, setName] = useState("Guest");
  const { isAuthConfigured, helloService } = useAppContext()

  useEffect(() => {
    if (!isAuthConfigured) {
      return
    }

    const fetchToken = async () => {
      try {
        const nameResult = await helloService.getGreetingName()
        setName(nameResult)
      }
      catch (error) {
        console.error("Failed to load from API!", error)
      }
    }
    fetchToken()
  },[isAuthConfigured]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>Hello {name}!</React.Fragment>
  )
}
