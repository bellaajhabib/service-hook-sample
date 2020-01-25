import { useState, useEffect } from "react";
import EventEmitter from "../../../_common/service/EventEmitter";

class AuthentServiceImpl {
  _emitter = new EventEmitter();
  _isConnected = false;
  _user = undefined;

  isConnected = () => {
    return this._isConnected;
  };
  connect = (login, pass) => {
    this._user = { login };
    this._isConnected = true;
    this._emitter.trigger({ user: this._user, isConnected: this._isConnected });
  };

  disconnect = () => {
    this._isConnected = false;
    this._user = undefined;
    this._emitter.trigger({ user: this._user, isConnected: this._isConnected });
  };
  getUser = () => {
    return this._user;
  };

  onChange = listener => {
    // return the removeListener that must be called to avoid memory leak
    return this._emitter.addListener(listener);
  };
}
const AuthentService = new AuthentServiceImpl();

//--------------------------------
// création du hook pour ce service
// (permet de rafraichir les composant si une donnée importante change)
//--------------------------------
export const useAuthent = () => {
  const [authent, setAuthent] = useState({
    user: AuthentService.getUser(),
    isConnected: AuthentService.isConnected()
  });

  useEffect(() => {
    return AuthentService.onChange(authent => {
      setAuthent(authent);
    });
  }, []);

  return [authent.user, authent.isConnected, AuthentService.disconnect];
};

export default AuthentService;
