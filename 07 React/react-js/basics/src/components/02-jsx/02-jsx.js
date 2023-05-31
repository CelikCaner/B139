import React from 'react';

function Jsx2() {
  const isAdmin = true;
  const loading = false;

  return (
    <>
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Kullanici Olustur</li>
            <li>Kullanici Guncelle</li>
            <li> Kullanici Sil</li>
          </ul>
        </>
      ) : loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h2>Kullanici Menu</h2>
          <ul>
            <li>Profilim</li>
            <li>Cikis Yap</li>
          </ul>
        </>
      )}
    </>
  );
}

export default Jsx2;
