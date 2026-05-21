import React from "react";
import { useParams } from "react-router-dom";

function Student() {

    const { srn } = useParams();

    const studentData = [
        { srn: "101", name: "Alice", age: 20 },
        { srn: "102", name: "Bob", age: 21 },
        { srn: "103", name: "Charlie", age: 22 },
    ];

    const student = studentData.find(
        (s) => s.srn === srn
    );

    if (!student) {
        return <h2>Student Not Found</h2>;
    }

    return (
        <div>
            <h2>Student Details</h2>

            <p>SRN: {student.srn}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
        </div>
    );
}

export default Student;