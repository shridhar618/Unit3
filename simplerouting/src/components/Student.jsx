import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Student() {

    const [searchParams] = useSearchParams();

    const srn = searchParams.get("srn");

    const studentData = [
        { id: "101", name: "Alice", age: 20, major: "Computer Science" },
        { id: "102", name: "Bob", age: 21, major: "Mathematics" },
        { id: "103", name: "Charlie", age: 22, major: "Physics" },
        { id: "104", name: "David", age: 23, major: "Chemistry" },
        { id: "105", name: "Eve", age: 24, major: "Biology" },
        { id: "106", name: "Frank", age: 25, major: "Economics" },
        { id: "107", name: "Grace", age: 26, major: "History" },
        { id: "108", name: "Heidi", age: 27, major: "Literature" },
        { id: "109", name: "Ivan", age: 28, major: "Philosophy" },
        { id: "110", name: "Judy", age: 29, major: "Sociology" }
    ];

    const student = studentData.find((s) => s.id === srn);

    return (
        <div>

            <h2>Student Details (Query Routing)</h2>

            {
                student ? (
                    <div>
                        <p><strong>ID:</strong> {student.id}</p>
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>Age:</strong> {student.age}</p>
                        <p><strong>Major:</strong> {student.major}</p>
                    </div>
                ) : (
                    <p>No student found with ID: {srn}</p>
                )
            }

            <br />

            <Link to="/">Back to Home</Link>

        </div>
    );
}

export default Student;