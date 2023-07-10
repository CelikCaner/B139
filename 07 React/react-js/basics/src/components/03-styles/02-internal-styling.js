import React from 'react'

export default function InternalStyling() {
    const styleTitle = {
        fontSize: '2rem',
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center'
    }

    const styleParagraph = {
        ...styleTitle,
        color: 'red',
        fontSize: '1rem',
    };

    return (
        <div>
            {/* INTERNAL STYLING */}
            <h2 style={styleTitle}>
                React Donguleri
            </h2>
            <p style={styleParagraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit et laborum iste blanditiis mollitia est autem voluptas rerum explicabo nobis numquam nemo aliquam saepe itaque facilis, tempore officiis, cumque odio?
            </p>
            {/* INTERNAL ve INTERNAL STYLING */}
            <p style={{
                ...styleTitle,
                color: 'navy',
                fontSize: '1rem',
            }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis velit, quidem maiores deserunt, earum eligendi ipsa veniam blanditiis inventore ad itaque iusto porro ratione vel, exercitationem molestiae praesentium suscipit soluta?
            </p>
        </div>
    )
}
