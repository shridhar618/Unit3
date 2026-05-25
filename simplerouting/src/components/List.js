import React from "react";
const List = () => {
    return (
        <div className="List" style={pageStyle}>
             <h2 style={pageStyle.h2}>
                Course List Component
             </h2>

            <p style={pageStyle.p}>
                List of courses for students.
            </p>

            <p style={pageStyle.p}>
                Different courses and learning topics.
            </p>

            <h4>URL: localhost:3000/courses/list</h4>
        </div>
    );
};

//Optional - Adding Style
const pageStyle = {
    background: 'skyblue',
    color: 'darkblue',
    padding: '1rem',
    fontFamily: 'Arial',

    h2: {
        color: 'darkgreen',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        fontSize: '28px'
    },

    p: {
        color: 'black',
        fontSize: '18px',
        fontFamily: 'Verdana',
        },
};
export default List;
