import React from "react";
const Search = () => {
    return (
        <div className="Search" style={pageStyle}>
                    
            <h2 style={pageStyle.h2}>
                Search Component
            </h2>

            <p style={pageStyle.p}>
                search dummy course page
            </p>

            <p style={pageStyle.p}>
                Users can search courses based on category,
               technology, or course name.
            </p>

            <h4>URL: localhost:3000/courses/search</h4>
        </div>
    );
};

const pageStyle = {
    background: 'limegreen',
    color: 'darkolivegreen',
    padding: '1rem',
    fontFamily: 'Arial',

    h2: {
        color: 'forestgreen',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        fontSize: '28px'
    },

    p: {
        color: 'palegreen',
        fontSize: '18px',
        fontFamily: 'Verdana',
        },
};
export default Search;
