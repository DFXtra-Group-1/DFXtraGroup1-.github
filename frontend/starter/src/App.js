import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import ViewProfilePage from './Components/ViewProfilePage';
import EditProfilePage from './Components/editView/EditProfilePage';

function App() {

  const SERVER_URL = 'https://cors-anywhere.herokuapp.com/http://3.209.113.207'

  return (

    <Router>
      <div className="App background">
        <Header />

        <Routes>
          <Route path='/graduate/:uuid' element={<ViewProfilePage SERVER_URL={SERVER_URL} />} />
          <Route path='/graduate/:uuid/edit/' element={<EditProfilePage SERVER_URL={SERVER_URL} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
