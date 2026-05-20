import React from 'react';

const Contact = () => {
    return (
        <div className='container' style={pageStyle}>
            <h4 className="center">Contact Us</h4>
            <p>Please feel free to contact us if you have any questions or concerns.</p>
        </div>
    );
}

const pageStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '20px'
};

export default Contact;