import { useState, useEffect } from "react";
import AuthentService from "../service/AuthentService";

const useAuthent = () => {
  const [authent, setAuthent] = useState({
    user: AuthentService.getUser(),
    isConnected: AuthentService.isConnected()
  });

  useEffect(() => {
    return AuthentService.onChange(authent => {
      setAuthent(authent);
    });
  }, []);

  const disconnect = () => AuthentService.disconnect();

  return [authent.user, authent.isConnected, disconnect];
};

export default useAuthent;
