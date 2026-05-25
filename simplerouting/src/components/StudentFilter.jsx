import React from "react";

import { useNavigate } from "react-router-dom";

function StudentFilter() {

    const navigate = useNavigate(); //Programmatic navigation
    // Programmatic Navigation
    const onChangeStatus = (event) => {
        const status = event.target.value;
        // Navigate dynamically Change using query string
        navigate(`/students?status=${status}`);
    };

    return (
        <div style={pageStyle}>
            <h2>Student Filter</h2>

            <label> Select Status: </label>
            <select onChange={onChangeStatus}>
                <option value="">
                    All
                </option>

                <option value="active">
                    Active
                </option>

                <option value="inactive">
                    Inactive
                </option>
            </select>
        </div>
    );
}

const pageStyle = {
    background: 'cyan',
    color: 'darkbrown',
    padding: '0.10rem'
};

export default StudentFilter;