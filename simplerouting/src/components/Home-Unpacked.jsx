import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(id.trim() !== ""){
            navigate(`/student/${id}`);
        }
    };


    return(
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Student Record System. This is the home page.</p>

            <input type="text" placeholder='Enter SRN' value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleSubmit}>Go</button>
        </div>
    );
}

export default Home;