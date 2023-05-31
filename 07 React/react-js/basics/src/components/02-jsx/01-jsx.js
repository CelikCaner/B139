const Jsx1 = () => {
  const name = 'John Doe';

  const user = {
    name: 'Jonathan',
    age: 30,
  };

  return (
    <div>
      <p>Butun JSX kodlari bir element icinde olmalidir.</p>
      <p>Merhaba {name}</p>
      <h2>Kullanici Bilgileri</h2>
      <p>Kullanici Adi: {user.name}</p>
      <p>Kullanici Yasi: {user.age}</p>
    </div>
  );
};

export default Jsx1;
