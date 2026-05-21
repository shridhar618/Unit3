import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Student from "./Student";

function App() {

    return (
        <BrowserRouter>

            <nav>
                <Link to="/student?srn=101">SRN 101</Link>

                <Link to="/student?srn=102">SRN 102</Link>

                <Link to="/student?srn=103">SRN 103</Link>
            </nav>

            <Routes>
                <Route path="/student" element={<Student />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;