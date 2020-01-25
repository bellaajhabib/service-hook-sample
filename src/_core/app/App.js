import React from 'react';
import './App.css';
import AuthentComponent from '../authent/component/AuthentComponent';
import MainMenuBar from "./component/MainMenuBar";
import useAuthent from "../authent/hook/useAuthent";

function App() {

  const [user,isConnected] = useAuthent();

  const renderMainPart = () => {
    if (isConnected) {
    return <div>Bienvenue {user.login} !</div>
    } else {
      return <AuthentComponent />
    }
  }

  return (
    <div className="App">
    <MainMenuBar />

      <div>
        {renderMainPart()}
      </div>
    </div>
  );
}

export default App;
