import React from 'react';

const NoPage = () => {
    return (
        <div className='container' style={pageStyle}>
            <h4 className="center">Page Not Found</h4>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

const pageStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '20px'
};

export default NoPage;