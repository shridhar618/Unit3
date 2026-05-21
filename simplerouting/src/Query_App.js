import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Student from "./components/Query_Student";
import Home from "./components/Query_Home";

function App() {

    return (
        <BrowserRouter>

            <nav>

                <Link to="/">Home</Link>

                <Link to="/student?id=101&name=Alice&age=20">
                    SRN 101
                </Link>

                <Link to="/student?id=102&name=Bob&age=21">
                    SRN 102
                </Link>

                <Link to="/student?id=103&name=Charlie&age=22">
                    SRN 103
                </Link>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/student"
                    element={<Student />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;