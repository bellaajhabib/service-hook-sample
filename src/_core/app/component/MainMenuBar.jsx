import React from "react";
import useAuthent from "../../authent/hook/useAuthent";
import "./MainMenuBar.css";

const MainMenuBar = () => {
  const [user, isConnected, disconnect] = useAuthent();

  const renderUser = () => {
    if (isConnected) {
      return (
        <div className="user">
          <span className="icon">
            <i className="fas fa-user"></i>
          </span>{" "}
          {user.login}
        </div>
      );
    }
  };
  const renderDisconnectButton = () => {
    if (isConnected) {
      return (
        <button
          onClick={disconnect}
          className="button main-menu-bar-connect-btn"
        >
          Déconnexion
        </button>
      );
    } else {
      return <div>Connexion requise</div>;
    }
  };
  return (
    <div className="main-menu-bar">
      {renderUser()}
      {renderDisconnectButton()}
    </div>
  );
};

export default MainMenuBar;
