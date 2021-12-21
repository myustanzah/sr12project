import "./index.css";
import Image1 from "../../../assets/banner-1.png";
import Image2 from "../../../assets/banner-2.png";
import Image3 from "../../../assets/banner-3.png";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <>
      <div id="container" className="row">
        <div className="row">
          <div id="kata-kata">
            <div id="kata-judul">
              <h1>Skin care helpful</h1>
            </div>
            <div id="kata-promote">
              <span>
                Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit
                amet, Lorem ipsum dolor sit amet
              </span>
              <br />
              <br />
              <span>
                Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit
                amet, Lorem ipsum dolor sit amet
              </span>
              <br />
              <br />
              <span>
                <b>Order more fast</b>
              </span>
            </div>
            <Link to="/product">
              <button
                className="btn btn-lg"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Get Started
              </button>
            </Link>
          </div>
          <div id="gambar-banner">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div
                class="carousel-inner"
                style={{ width: "80%", height: "auto" }}
              >
                <div class="carousel-item active">
                  <img src={Image1} class="d-block w-100" alt="..." />
                </div>
                <div
                  class="carousel-item"
                  // style={{ width: "50%", height: "auto" }}
                >
                  <img src={Image2} class="d-block w-100" alt="..." />
                </div>
                <div
                  class="carousel-item"
                  // style={{ width: "50%", height: "auto" }}
                >
                  <img src={Image3} class="d-block w-100" alt="..." />
                </div>
                {/* Button */}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-evenly" id="button-nav-sosmed">
          <div className="row" id="box-button">
            {/* <button
              type="button"
              data-bs-toggle="popover"
              className="btn btn-premier"
              title="You can find me"
              data-bs-content="Tanggerang, Serpong"
              style={{
                backgroundColor: "#dfe8aa",
                color: "gray",
                fontSize: "20px",
                width: "auto",
              }}
            >
              <b>Click me</b>
              <br /> To show our location
            </button> */}
            <button
              type="button"
              data-bs-toggle="popover"
              className="btn btn-premier"
              title="You can find me"
              data-bs-content="Tanggerang, Serpong"
              style={{
                backgroundColor: "#dfe8aa",
                color: "gray",
                width: "auto",
              }}
            >
              <b>Click me</b>
              <br /> To show our location
            </button>
            <a
              href="https://wa.me/+6285158433857"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "150px" }}
            >
              <button
                type="button"
                className="btn btn-premier"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  width: "150px",
                }}
              >
                <b>Chat me On Whatsapp</b>
              </button>
            </a>
          </div>
          <div className="row" id="sosial-media">
            <button
              type="button"
              class="btn btn-outline-primary"
              id="button-sosial-media"
            >
              Facebook
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              id="button-sosial-media"
            >
              Instagram
            </button>
            <button
              type="button"
              class="btn btn-outline-info"
              id="button-sosial-media"
            >
              Twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
