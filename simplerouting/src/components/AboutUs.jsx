import React from 'react';

const AboutUs = () => {

    return (
        <div className='container' style={pageStyle}>
            <h4 className="center">About Us</h4>
            <p> My about us page content is here</p>
        </div>
    );
}

const pageStyle = {
    backgroundColor: 'skyblue',
    color: 'maroon',
    padding: '20px'
};

export default AboutUs;