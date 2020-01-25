import React, { useState } from "react";
import AuthentService from "../service/AuthentService";

const AuthentComponent = () => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  const handleConnectClick = () => AuthentService.connect(login, pass);

  return (
    <div className="authent-component">
      <div className="panel is-primary">
        <p className="panel-heading">Connexion</p>
        <div class="panel-block" style={{ justifyContent: "center" }}>
          <div class="form">
            <div className="field">
              <label className="label" htmlFor="login">
                Login
              </label>
              <div className="control">
                <input
                  className="input"
                  name="login"
                  type="text"
                  onChange={event => setLogin(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="field">
              <label lassName="label" htmlFor="pass">
                Mot de passe
              </label>
              <div className="control">
                <input
                  className="input"
                  name="pass"
                  type="password"
                  onChange={event => setPass(event.target.value)}
                ></input>
              </div>
            </div>

            <div>
              <button className="button" onClick={handleConnectClick}>
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthentComponent;
