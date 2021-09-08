import React from "react";
import "../../../styles/About.css";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <>
      <div className="container text-center my-1 w-100 text-white">
        <h1 className="fs-1 text-white font">How does it works ?</h1>
      </div>
      <div className="container text-center w-75 text-white">
        <ol class=" list-group my-2 text-white">
          <Link to="/register" className="text-decoration-none">
            <li class=" list-group-item my-2 list-unstyled text-white bg">
              <p className="text fs-4">
                Register your account here
                <br />
                <i class="bi bi-box-arrow-in-right fs-2"></i>
              </p>
            </li>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <li class="list-group-item my-2 list-unstyled text-white bg">
             
              <p className="text fs-4">Login with your new user</p>
              <i class="bi bi-person-circle fs-2"></i>
            </li>
          </Link>

          <Link to="/" className=" text-decoration-none">
            <li class="list-group-item my-2 list-unstyled text-white bg">
              <p className="text fs-4">
                Manage all your daily tasks
                <br />
                <i class="bi bi-list-task fs-1"></i>
              </p>
            </li>
          </Link>
        </ol>
      </div>
    </>
  );
}
