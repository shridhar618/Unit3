import React from "react";

import {  useSearchParams } from "react-router-dom";

function StudentList() {

  const [searchParams] =useSearchParams(); //Read query parameters

  // Reading Query String
  const status =searchParams.get("status"); //Get query value

  return (
    <div style={pageStyle}>
      <h2>Student Records</h2>
      <p>
        <b>Selected Status:</b>
        {" "}
        {status || "All"}
      </p>
      {
        status === "active" && (
          <ul style={pageStyle.list.active}>
            <li>Rahul - Active</li>
            <li>Disha- Active</li>
          </ul>
        )
      }

      {
        status === "inactive" && (
          <ul style={pageStyle.list.inactive}>
            <li>Anjali - Inactive</li>
            <li>Rajesh - Inactive</li>
          </ul>

        )
      }

      {
        !status && (

          <ul>
            <li style={pageStyle.list.active}>
            Rahul - ActiveUser
            </li>
            <li style={pageStyle.list.active}>
             Disha - ActiveUser
             </li>
            <li style={pageStyle.list.inactive}>
                Anjali - InactiveUser
            </li>
            <li style={pageStyle.list.inactive}>
                Rajesh - InactiveUser
            </li>
          </ul>
        )
      }
    </div>
  );
}

const pageStyle = {
          background: 'skyblue',
          color: 'darkblue',
          padding: '0.10rem',
   
          list: {
                active: {
                        color: "green",
                        },
                inactive: {
                           color: "darkred",
                        },
            },
          };

export default StudentList;