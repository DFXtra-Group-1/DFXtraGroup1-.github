import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import ViewProfilePage from './Components/ViewProfilePage';
import EditProfilePage from './Components/editView/EditProfilePage';
import PersonalStoryView from './Components/editView/PersonalStory/PersonalStoryView';

function App() {

  const SERVER_URL = 'http://localhost:4000'

  return (

    <Router>
      <div className="App background">
      <Header />
      
        <Routes>
          {/* <Route path='/graduate/:uuid' element={<ViewProfilePage SERVER_URL={SERVER_URL} />} /> */}
          <Route path='/graduate/:uuid/edit/' element={<EditProfilePage SERVER_URL={SERVER_URL} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
