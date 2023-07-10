import React from 'react';
import styles from './04-external.module.css';

const ExternalModuleStyling = () => {
    const { externalModuleStyling, title } = styles;

    return (
        <div className={externalModuleStyling}>
            <h2 className={title}>React Hooks</h2>
            <p>React Hooks are a new feature introduced in React 16.8.0 version. It allows you to use state and other React features without writing a class.</p>
        </div>
    )
}

export default ExternalModuleStyling