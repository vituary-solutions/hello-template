import React, {useEffect, useState} from "react";
import {getGreetingName} from "../service/hello-service";

export default function Greeting() {
  const [name, setName] = useState('Guest');

  useEffect(() => {
    getGreetingName()
      .then(
        (result) => {
          setName(result)
        },
        (error) => {
          console.error("Failed to load from API!", error)
        }
      )
  },[]);

  return (
    <React.Fragment>Hello {name}!</React.Fragment>
  )
}
