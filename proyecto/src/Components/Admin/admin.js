import React from 'react';
import './admin.css';

export default function admin() {
  return(
    <div className="admin-wrapper">
    <h2>Administrador</h2> 
        <label>
            <p>Habilitar usuario</p>
            <input type="text"/>
        </label>
        <label>
            <p>Por edad: Mayores a</p>
            <input type="Edad"/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
    </div>
  );
}