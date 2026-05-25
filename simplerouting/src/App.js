// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';

// // import './App.css';

// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';
// import NoPage from './components/NoPage';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <header className="App-header">
//           <Navbar />
//         </header>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


/*React Programmatic Navigation implements:
1. useNavigate()
2. Query String Routing
3. Programmatic Navigation
4. Dynamic URL update using dropdown
Updated URL: http://localhost:3000/students?status=inactive
*/
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import StudentFilter from "./components/StudentFilter";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <BrowserRouter>
      <h1>Student Records </h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/students">Student Records</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students"
               element={
                        <>
                          <StudentFilter />
                          <StudentList />
                        </>
                        }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
