import React from "react";
import { Link, Outlet } from "react-router-dom";
const Courses = () => {
    return (
        <div className="Page" style={pageStyle}>
            <h2 style={pageStyle.h2}>You are in the Courses page!</h2>
            <h3>URL: localhost:3000/courses</h3>
            <div className="courses-nav">
                <Link to="/courses/search"
                style={pageStyle.link}>Search</Link>
                  {' | '}
                <Link to="/courses/list"
                    style={pageStyle.link}>List</Link>
                <br/><br/>
            </div>
            <Outlet />
        </div>
    );
};

//Optional - Adding Style
const pageStyle = {
    background: 'midnightblue',
    color: 'cyan',
    padding: '1rem',
    fontFamily: 'Tahoma',

    h2: {
        color: 'gold',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        fontSize: '28px'
    },

    link: {
        color: 'white',
        },
};
export default Courses;
