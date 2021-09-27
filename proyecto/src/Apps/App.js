import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import admin from '../Components/Admin/admin';
import Login from '../Components/Login/Login';
import useToken from './usetoken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
    <h1>Registro de Vacunacion</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;