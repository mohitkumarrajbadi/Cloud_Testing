import React from "react";
import ReactDom from "react-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Mohit Kumar Raj Badi
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Section1() {
  return (
    <div className="section1">
      <img src="mohit_image.jpeg" class="rounded-circle" alt="Cinque Terre" />
    </div>
  );
}

ReactDom.render(
  <div>
    <NavBar />
    <Section1 />
  </div>,
  document.getElementById("root")
);
