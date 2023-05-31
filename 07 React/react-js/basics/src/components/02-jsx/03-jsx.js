import React from 'react';

export const Jsx3 = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john@exapmle.com',
    occupation: 'Software Dev',
  };

  const error = false;

  return (
    <div>
      {user.age >= 18 && <h1>Bu icerik 18 yasindan buyuklere ozeldir.</h1>}
      {user.age > 17 || <h1>Bu icerik 17 yasindan kucukler icindir.</h1>}
      {error && <p>Burada bir hata bulunmaktadir.</p>}
    </div>
  );
};

export default Jsx3;
