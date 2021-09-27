import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return(
    <div className="dashboard-wrapper">
    <h2>Dashboard</h2> 
        
        <label>
            <Link to='../Admin'>Administrador</Link>
        </label>
        <br/>
        <label>
            <a href='empleado'>Empleado</a>
        </label>
        <br/>
        <label>
            <a href='usuario'>Usuario</a>
        </label>
        <br/>
        <label>
            <a href='Anonimo'>Continuar Anonimo</a>
        </label>
    </div>
  );
}