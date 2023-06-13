import React from 'react'

const IsLogin = () => {

    const isLogin=false;
    const name="Ali";
    const surName="Tan";




  return (
    <div>

        {

            isLogin ? (<h2>Welcome to our company {name} {surName}  </h2> ) :
            (<h2> Lutfen giris yapiniz  </h2>)

        }







    </div>
  )
}

export default IsLogin