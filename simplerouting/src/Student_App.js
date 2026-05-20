import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Stu_Home";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Student from "./components/Student";

function StuApp(){
    return(
        <BrowserRouter>
            <h1>Student Record System</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/student/101">SRN 101</Link>
                <Link to="/student/102">SRN 102</Link>
                <Link to="/student/103">SRN 103</Link>
                <Link to="/student/104">SRN 104</Link>
                <Link to="/student/105">SRN 105</Link>
                <Link to="/student/106">SRN 106</Link>
                <Link to="/student/107">SRN 107</Link>
                <Link to="/student/108">SRN 108</Link>
                <Link to="/student/109">SRN 109</Link>
                <Link to="/student/110">SRN 110</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student/:srn" element={<Student />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>


        </BrowserRouter>
    );
}


export default StuApp;
