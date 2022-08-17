import './Styles/App.css';
import ViewProfilePage from './Components/ViewProfilePage'

// import YourProfile from './Components/profileView/YourProfile';
// import YourTraining from './Components/profileView/YourTraining';
// import mockData from './Tests/graduate-user-test.json';

function App() {

  const SERVER_URL = 'http://localhost:4000'

  return (

    <div className="App">
      {/* <YourProfile graduates={mockData.graduateUser} /> */}
      {/* <YourTraining graduates={mockData.graduateUser} /> */}
      <ViewProfilePage SERVER_URL={ SERVER_URL }/>
    </div>
  );
}

export default App;
