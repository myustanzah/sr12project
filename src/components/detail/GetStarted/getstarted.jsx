import "./index.css";
import Image1 from "../../../assets/banner-1.png";
import Image2 from "../../../assets/banner-2.png";
import Image3 from "../../../assets/banner-3.png";

export default function GetStarted() {
  return (
    <>
      <div id="container" className="row">
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
          <button
            className="btn btn-lg"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Get Started
          </button>
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

        <div
          className="row d-flex justify-content-center align-items-center"
          id="Information"
        >
          <div id="box-button">
            <button
              type="button"
              class="btn btn-lg"
              data-bs-toggle="popover"
              title="You can find me"
              data-bs-content="Tanggerang, Serpong"
              style={{
                backgroundColor: "#dfe8aa",
                color: "gray",
                fontSize: "20px",
              }}
            >
              <b>Click me</b>
              <br /> To show our location
            </button>
            <button
              type="button"
              class="btn btn-lg"
              data-bs-toggle="popover"
              title="You can find me"
              data-bs-content="Tanggerang, Serpong"
              style={{
                backgroundColor: "#dfe8aa",
                color: "gray",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <b>Click me</b>
              <br /> To show our location
            </button>
            <a
              href="https://wa.me/0895606064773"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="btn btn-lg"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                <b>Chat me On Whatsapp</b>
              </button>
            </a>
          </div>

          <div id="sosial-media">
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
