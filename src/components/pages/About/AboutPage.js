import React from "react";
import "../../../styles/About.css";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <>
      <div className="container text-center my-2 w-100 text-white">
        <h1 className="fs-1 text-white font">How does it works ?</h1>
        <h6 class=" text-white font">It´s very simple :)</h6>
      </div>
      <div className="container text-center my-1 w-50 text-white">
        <ol class=" list-group my-4 text-white">
          <Link to="/login" className="text-decoration-none">
            <li class=" list-group-item list-group my-3 list-unstyled text-white bg">
              <p className="text fs-4">
                Register your account here !
                <i class="bi bi-box-arrow-in-right fs-2"></i>
              </p>
            </li>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <li class="list-group-item my-3 list-unstyled text-white bg">
              {" "}
              <p className="text fs-4">Login with your new account </p>{" "}
              <i class="bi bi-person-circle fs-2"></i>
            </li>
          </Link>

          <Link to="/" className=" text-decoration-none">
            <li class="list-group-item my-3 list-unstyled text-white bg">
              {" "}
              <p className="text fs-4">
                Manage all your daily tasks here
                <i class="bi bi-list-task fs-1"></i>
              </p>
            </li>
          </Link>
        </ol>
      </div>
    </>
  );
}
