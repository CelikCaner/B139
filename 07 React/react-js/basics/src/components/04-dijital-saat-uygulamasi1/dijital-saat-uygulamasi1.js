import React from 'react';
import './dijital-saat-uygulamasi1.scss';
import moment from 'moment';

const DijitalSaatUygulamasi1 = () => {
    const timeStr = moment().format("HH:mm");
    const dateStr = moment().format("LL");
    const dayStr = moment().format("dddd");
    const hour = moment().hour();

    let message = '';

    if (hour >= 6 && hour < 11) {
        message = "MORNING"
    } else if (hour >= 11 && hour < 14) {
        message = "NOON"
    } else if (hour >= 14 && hour < 17) {
        message = "AFTERNOON"
    } else if (hour >= 17 && hour < 22) {
        message = "EVENING"
    } else {
        message = "NIGHT"
    };

    return (
        <div className='dijital-saat-uygulamasi1'>
            <div className='time'>{timeStr}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    );
};

export default DijitalSaatUygulamasi1;