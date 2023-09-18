import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

var page = (
  <div>
    {/* header  */}
    <div className="container ">
      <row>
        <div className="col-10 offset-1 fixed-top text-bg-light border-radius-2 rounded">
          <nav class="navbar  navbar-expand-lg  btn btn">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end me-5"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav  mb-2 mb-lg-0 ">
                  <li class="nav-item mx-2">
                    <a
                      class="nav-link active text-success"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Servisec
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Plane
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Review
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      post
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Contect
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </row>
    </div>

    {/* header  */}
    {/* carousel */}

    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner carousel-fade">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="/cear1.jpg" class="d-block w-100" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="c_h">First Home 1</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="/cear2.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="c_h">First slide label 2</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://picsum.photos/960/450?3"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="c_h">First about 3</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 mt-3">
          <h1 align="center">Unlock All Features</h1>
        </div>
      </div>
      <div className="row">
        <div align="center" className="col-12">
          <span>
            Duis aute irure dolor in in velit esse cillum dolore eu fugiat
          </span>
        </div>
      </div>
    </div>
    {/* carousel */}
    {/* cards  */}
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card gl hover-success">
            <div className="card-body">
              <div className="my-5 d-flex fa-2xl">
                <h3 className=" ">Speed</h3>
                <i class="fa-solid fa-2xl my-icon fa-bolt "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card gl hover-success">
            <div className="card-body">
              <div className="my-5 d-flex fa-2xl">
                <h3 className=" ">Security</h3>
                <i class="fa-solid my-icon fa-2xl fa-shield-halved "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12  col-sm-6 col-md-4 col-lg-4">
          <div className="card gl hover-success">
            <div className="card-body">
              <div className="my-5 d-flex fa-2xl">
                <h3 className=" ">Support</h3>
                <i class="fa-solid fa-2xl my-icon fa-headset "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* cards  */}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 align="center">ABOUT US</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1"></div>
      </div>
    </div>
  </div>
);

root.render(page);
