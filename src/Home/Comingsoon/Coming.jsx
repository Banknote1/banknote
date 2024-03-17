import React from 'react';

function Coming() {
    const divStyle = {
        backgroundImage: `url('/coming soon.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Change body color to white
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={divStyle}>
                <img style={{ width: "60vw" }} src="/loading.svg" alt="" />
            </div>
        </div>
    );
}

export default Coming;
