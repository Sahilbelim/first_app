import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Navbar() {
  return (
    <div className="container ">
      <row>
        <div className="col-10 offset-1 fixed-top text-bg-light border-radius-2 rounded">
          <nav class="navbar  navbar-expand-lg  btn btn shadow">
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
  );
}

function Carousel() {
  return (
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner carousel-fade">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="./img/cear1.jpg" class="d-block w-100" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="c_h">First Home 1</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="./img/cear2.jpg" class="d-block w-100" alt="..." />
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
  );
}
function Heading() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 mt-3">
          <h1 align="center">
            <b>Unlock All Features</b>
          </h1>
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
  );
}

function Footer() {
  return (
    <footer class="pt-120 pb-60 text-bg-success" id="contact">
      <div class="container p-3">
        <div class="row p-2">
          <div class="col-lg-5 col-12 text-center text-lg-start">
            <img src="images/logo-2.png" alt="" />
          </div>
          <div class="col-lg-7 col-12 text-center text-lg-end">
            <p class="text-white pt-3 pt-lg-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco{" "}
            </p>
          </div>
        </div>
        <hr class="my-5" />
        <div class="row py-2">
          <div class="col-md-12 col-lg-4 py-2">
            <div class="d-flex justify-content-lg-start justify-content-center">
              <div class="fs-2">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="align-self-center ms-3">
                565, Newstone Rd, New York, United States
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 py-2">
            <div class="d-flex justify-content-center">
              <div class="fs-2">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div class="align-self-center ms-3">contact@yoursitename.com</div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 py-2">
            <div class="d-flex justify-content-lg-end justify-content-center">
              <div class="fs-2">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="align-self-center ms-3">
                001 253-567-8910, 001 333-444-6699
              </div>
            </div>
          </div>
        </div>
        <hr class="my-5" />
        <div class="row">
          <div class="col-12 col-lg-4 text-center text-lg-start">
            <ul class="socials list-group d-inline-flex list-group-horizontal">
              <li class="me-3">
                <a href="">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="me-3">
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="me-3">
                <a href="">
                  <i class="fab fa-skype"></i>
                </a>
              </li>
              <li class="me-3">
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p class="pt-4 m-0">
              © 2022 Made with <i class="fas fa-heart"></i> by sahil belim
            </p>
          </div>
          <div class="col-12 col-lg-8 align-self-center pt-4 pt-lg-0"></div>
        </div>
      </div>
    </footer>
  );
}
function Page() {
  return (
    <div>
      {/* header  */}
      <Navbar />
      {/* header  */}
      {/* carousel */}
      <Carousel />
      {/* carousel */}
      {/* heading 1 */}
      <Heading />
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
      <div className="container my-3">
        <div className="row my-3">
          <div className="col-12 my-3">
            <h1 align="center">
              <b>ABOUT US</b>
            </h1>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <img
              src="https://picsum.photos/450/400"
              className="img-fluid rounded-5 shadow"
              alt=""
            />
          </div>
          <div className="col-6">
            <div className="card border-0">
              <div className="card-body ">
                <h1 align="center" className="text-start">
                  <b>Turning Your Ideas Into Huge Profits</b>
                </h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  maiores, quisquam voluptas aut delectus vitae mollitia
                  recusandae atque, est, porro consequatur ipsa similique
                  voluptatem possimus?
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <a className="nav-link  ">
                  Read more &nbsp;<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 my-5 gl">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 align="center">
              <b>What We Offer</b>
            </h1>

            <p align="center">
              Duis aute irure dolor in in velit esse cillum dolore eu fugiat
            </p>
          </div>
        </div>
        <div className="row ms-5 mt-5  ">
          <div className="col-3 ps-5 ">
            <div className="fa-2xl pb-5 d-flex">
              <i class="fa-regular m-5 fa-2xl fa-pen-to-square "></i>
            </div>
          </div>
          <div className="col-3 ">
            <div className="fa-2xl pb-5 d-flex ">
              <i class="fa-solid fa-code m-5 fa-2xl"></i>
            </div>
          </div>
          <div className="col-3 ">
            <div className="fa-2xl pb-5 d-flex">
              <i class="fa-solid fa-lightbulb m-5 fa-2xl"></i>
            </div>
          </div>
          <div className="col-3 ">
            <div className="fa-2xl pb-5  d-flex">
              <i class="fa-solid fa-mobile-screen  m-5 fa-2xl"></i>
            </div>
          </div>
        </div>
        <div className="row ms-5">
          <div className="col-3 ps-5 ">
            <div className="fa-2xl pb-5 d-flex">
              <h5 className=" btn btn-light hover-success">
                <b>Graphic Design</b>
              </h5>
            </div>
          </div>
          <div className="col-3 ">
            <div className="fa-2xl pb-5 d-flex">
              <h5 className=" btn btn-light hover-success">
                <b>Development</b>
              </h5>
            </div>
          </div>
          <div className="col-3 ">
            <div className="fa-2xl pb-5 d-flex">
              <h5 className=" btn btn-light hover-success">
                <b>Digital Marketing</b>
              </h5>
            </div>
          </div>
          <div className="col-3 ps-5 ">
            <div className="fa-2xl pb-5 d-flex">
              <h5 className=" btn btn-light hover-success">
                <b>App Design</b>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
}
// root.render(Card());
root.render(<Page />);
