import React from 'react'

const Welcome1 = (props) => {
    // props'u dogrudan alarak obje icinden ilgili key'i sayfamiza yerlestirebiliriz

    // const newObject = {
    //     name: "Ozgur",
    //     age: "Aktas"
    // }

    return (
        <div className='welcome'>
            <h1>
                Welcome {props.firstName} {props.lastName}
            </h1>
            {/* disabled props'tan gonderilmezse asagidaki p elementini goster, gonderilirse gosterme */}
            {
                props.disabled
                ||
                <p>
                    {props.desc}
                </p>
            }
            {
                props.disabled
                &&
                <p>
                    Burasi sadece Admin'e gosterilecek
                </p>
            }
        </div>
    )
}

export default Welcome1