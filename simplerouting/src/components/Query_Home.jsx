import React from "react";

function Home() {

    const students = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve"
    ];

    return (
        <div style={pageStyle}>

            <h1 style={headingStyle}>
                Student Management System
            </h1>

            <p style={textStyle}>
                Welcome to the Student Management Portal.
                You can manage student records, view details,
                and navigate through different student profiles.
            </p>

            <div style={cardStyle}>

                <h2>Features</h2>

                <ul>
                    <li>View Student Details</li>
                    <li>Parameterized Routing</li>
                    <li>Query Routing</li>
                    <li>React Router Navigation</li>
                    <li>Conditional Rendering</li>
                </ul>

            </div>

            <div style={cardStyle}>

                <h2>Available Students</h2>

                {
                    students.map((student, index) => (
                        <p key={index}>
                            {index + 1}. {student}
                        </p>
                    ))
                }

            </div>

        </div>
    );
}

const pageStyle = {
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh"
};

const headingStyle = {
    color: "#333",
    marginBottom: "20px"
};

const textStyle = {
    fontSize: "18px",
    color: "#555"
};

const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    margin: "20px auto",
    width: "60%",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)"
};

export default Home;