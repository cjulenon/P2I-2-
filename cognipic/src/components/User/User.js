import React, { useState, useEffect } from 'react';
//import './User.css';



function User(props) {  

  return (
    <>
      <div className="User">
        <p>ID : {props.id}</p>
        <p>Pseudo : {props.pseudo} </p> 
        <p>Mail : {props.mail}</p> 
        <p>Admin : {props.admin && <span>true</span>} {!props.admin && <span>false</span>}       
        <p></p>
        <button className="definir-admin" onClick={() => props.definirAdmin(props.id)}>Définir comme administrateur</button>
        </p>
        <button onClick={() => props.supprimerUser(props.id)}>Supprimer</button>

      </div>
    </>
  );
}

export default User;