import React from "react";
const Home = () => {
    return (
        <div className="Page" style={pageStyle}>
            <h2>Welcome to the Home Page</h2>
            <h3 style={pageStyle.h3}>URL: localhost:3000/</h3>

            <p style={pageStyle.p}>Nested Routing using React Router DOM.</p>

            <p>Users navigate between different pages.</p>
        </div>
    );
};

//Optional - Adding Style
const pageStyle = {
    background: 'lavender',
    color: 'darkslateblue',
    padding: '1rem',
    fontFamily: 'Courier New',

    h3: {
        color: 'crimson',
        fontFamily: 'Arial',
        fontSize: '20px'
    },

    p: {
        color: 'darkmagenta',
        fontSize: '18px',
        fontFamily: 'Calibri',
        lineHeight: '1.8'
    },
};
export default Home;
