import './Styles/App.css';
import ViewProfilePage from './Components/ViewProfilePage'

// import YourProfile from './Components/profileView/YourProfile';
// import YourTraining from './Components/profileView/YourTraining';
// import mockData from './Tests/graduate-user-test.json';

import YourProfile from './Components/profileView/YourProfile';
import YourTraining from './Components/profileView/YourTraining';
import Header from './Components/Header';
import Info from './Components/information/Info';
import mockData from './Tests/graduate-user-test.json';

function App() {

  const SERVER_URL = 'http://localhost:4000'

  return (

    <div className="App background">
      <Header />
      <Info graduates={mockData.graduateUser} />
      {/* <YourProfile graduates={mockData.graduateUser} /> */}
      {/* <YourTraining graduates={mockData.graduateUser} /> */}
      <ViewProfilePage SERVER_URL={SERVER_URL} />
      <YourTraining graduates={mockData.graduateUser} />
    </div>
  );
}

export default App;
