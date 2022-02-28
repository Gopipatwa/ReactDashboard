import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React,{useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  // const [token, setToken] = useState();
  // const token = getToken();
  const { token, setToken } = useToken();
  const [check,setCheck] = useState(true);

  if(!token) {
    // setCheck(false)
    return <Login setToken={setToken} />
  }
  console.log(check);
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' caseSensitive={true} element={<Dashboard check={check}/>} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
