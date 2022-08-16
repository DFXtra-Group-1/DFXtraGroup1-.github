import './Styles/App.css';

import YourProfile from './Components/profileView/YourProfile';
import mockData from './Tests/graduate-user-test.json';

function App() {

  return (

    <div className="App">
      <YourProfile graduates={mockData.graduateUser} />
    </div>
  );
}

export default App;
