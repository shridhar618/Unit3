import React from "react";
import { useSearchParams } from "react-router-dom";

function Student() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const age = searchParams.get("age");

    const changeStudent = () => {
        setSearchParams({ id: "102", name: "Bob", age: "21" });
    };

    return (
        <div>
            <h2>Student Details (Query Routing)</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>

            <button onClick={changeStudent}>Change Student</button>
        </div>
    );
}

export default Student;