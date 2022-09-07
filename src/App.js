import './App.css';
import Home from './components/home';
import Registration from './components/registration';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
