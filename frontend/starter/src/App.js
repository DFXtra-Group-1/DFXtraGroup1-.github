import './Styles/App.css';

import YourProfile from './Components/profileView/YourProfile';
import YourTraining from './Components/profileView/YourTraining';
import mockData from './Tests/graduate-user-test.json';

function App() {

  return (

    <div className="App">
      {/* <YourProfile graduates={mockData.graduateUser} /> */}
      <YourTraining graduates={mockData.graduateUser} />
    </div>
  );
}

export default App;
