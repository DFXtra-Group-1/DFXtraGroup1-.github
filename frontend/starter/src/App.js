import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import ViewProfilePage from './Components/ViewProfilePage';

function App() {

  const SERVER_URL = 'http://localhost:4000'

  return (

    <div className="App background">
      <Header />
      <ViewProfilePage SERVER_URL={SERVER_URL} />
    </div>
  );
}

export default App;
