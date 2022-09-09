import './App.css';
import Home from './components/home';
import Registration from './components/registration';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Profile from './components/profile';

function App() {

  const localStorageData = localStorage.getItem("profileData")

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={localStorageData === null ? <Navigate to='/registration' /> : <Navigate to='/home' />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
