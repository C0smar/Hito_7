import React from 'react';
const Profile = () => {

  return (
    <div className="profileContainer" >
        <div className='profileCard'>
            <img className='profileImg'src="profile_logo.png" alt="placeholder de perfil" />
            <h2>Perfil de usuario</h2>
            <p>Email: XXXX.XXX@gmail.com {/* {email} */}</p>
            <button className='btnProfile'>Cerrar sesión</button>
        </div>
    </div>
  );
};

export default Profile;