import React, { useState, useEffect } from 'react';
import { getUserinfo, updatePassword, updateUser } from '../../services/api';
import './UserInfo.css';



function UserInfo() {  
  const [info, setInfo] = useState({});
  const [isEditingMail, setIsEditingMail] = useState(false);
  const [isEditingPseudo, setIsEditingPseudo] = useState(false);
  const [isEditingMdp, setIsEditingMdp] = useState(false);
  const [data, setData] = useState({});
  const [mdp, setMdp] = useState({});

  
  
  useEffect(() => {
    getUserinfo(localStorage.getItem('token')).then((response) => {
      console.log(response)
      setInfo(response);
      setData({
        pseudo: response.pseudo,
        mail: response.mail
      });
    });  
  }, []);  

  function handleChange(e) {
    const updatedData = { ...data, [e.target.name]: e.target.value };
    setData(updatedData);
  }

  function handleChangeMdp(e) {
    const updatedMdp = { ...mdp, [e.target.name]: e.target.value };
    setMdp(updatedMdp);
    console.log(mdp);
  }


  function handleUpdate() {
    console.log(data);
    updateUser(localStorage.getItem('token'), info.id, JSON.stringify(data)).then(data => setInfo(data));
  }

  function handleUpdateMdp() {
    console.log(data);
    updatePassword(localStorage.getItem('token'), JSON.stringify(mdp)).then(data => console.log(data));
  }
  


  return (
    <>
      <div className="UserInfo">
        <p>ID : {info.id}</p>
        <p>Pseudo : {info.pseudo}  
          <div></div>       
          <button onClick={() => setIsEditingPseudo(!isEditingPseudo)}>Modifier</button>
          {isEditingPseudo && (
            <span>
            <input
              type="text"
              name="pseudo"
              onChange={handleChange}
              placeholder="pseudo"
            />
            <button onClick={() => {setIsEditingPseudo(!isEditingPseudo);handleUpdate()}}>Enregistrer</button>
          </span>)}
        </p>
        <p>Mail : {info.mail}
        <div></div>
          <button onClick={() => setIsEditingMail(!isEditingMail)}>Modifier</button>
          {isEditingMail && (
              <span>
            <input
              type="text"
              name="mail"
              onChange={handleChange}
              placeholder="mail"
            />
            <button onClick={() => {setIsEditingMail(!isEditingMail);handleUpdate()}}>Enregistrer</button>
            </span>

          )}
        </p>
        {info.admin && <p>Vous êtes admin.</p>}
        <button onClick={() => setIsEditingMdp(!isEditingMdp)}>Modifier votre mot de passe</button>

        {isEditingMdp && (
          <div>
          <input
              type="password"
              name="password"
              onChange={handleChangeMdp}
              placeholder="password"
            />
        <button onClick={() => {setIsEditingMdp(!isEditingMdp);handleUpdateMdp()}}>Enregistrer</button></div>)}

      </div>
    </>
  );
}

export default UserInfo;