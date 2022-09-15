import './App.css';
import Home from './components/home';
import Registration from './components/registration';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Profile from './components/profile';
import { useState } from 'react';

function App() {

  const [logged, setLogged] = useState(false)


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={logged === false && localStorage.getItem('profileData') === null ? <Registration setState={setLogged} /> : <Navigate to='/home' />} />
          <Route exact path='/registration' element={logged === false && localStorage.getItem('profileData') === null ? <Registration setState={setLogged} /> : <Navigate to='/home' />} />
          <Route exact path='/home' element={localStorage.getItem('profileData') !== null ? <Home state={logged} setState={setLogged} /> : <Navigate to='/registration' />} />
          <Route exact path='/profile' element={localStorage.getItem('profileData') !== null ? <Profile state={logged} setState={setLogged} /> : <Navigate to='/registration' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
