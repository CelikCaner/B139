import React from 'react'

const Welcome3 = ({ firstName }) => {
    // props'lar dogrudan parametre icerisinde destructure edilebilir

    return (
        <div className='welcome'>
            <h2>
                Welcome {firstName}
            </h2>
        </div>
    )
}

export default Welcome3