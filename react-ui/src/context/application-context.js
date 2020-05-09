import React, {useContext, useEffect, useState} from "react";
import {useAuth0} from "../react-auth0-spa";
import HelloService from "../service/hello-service";
import TeamService from "../service/team-service";

export const AppContext = React.createContext();
export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({children}) {
  const [helloService, setHelloService] = useState()
  const [teamService, setTeamService] = useState()
  const [isAuthConfigured, setAuthConfigured] = useState(false)
  const { isAuthenticated, getTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    const configureServices = async () => {
      const token = await getTokenSilently();
      setHelloService(new HelloService(token))
      setTeamService(new TeamService(token))
      setAuthConfigured(true)
    }
    configureServices()
  }, [isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppContext.Provider
      value={{
        isAuthConfigured,
        helloService,
        teamService
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
