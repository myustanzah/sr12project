import Promo from "./detail/Promo/promo";
import Testimonial from "./detail/Testimonial/testimonial";
import Product from "./detail/Product/product";
import GetStarted from "./detail/GetStarted/getstarted";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoHead from "../assets/LOGO-SR12.png";
import "./index.css";

export default function Dashboard() {
  return (
    <Router>
      <nav
        class="navbar navbar-expand-lg"
        style={{ fontSize: "25px", marginLeft: "25px" }}
      >
        <div class="container-fluid">
          <div id="icon-head">
            <Link class="navbar-brand" to="/">
              <img src={LogoHead} alt="" />
            </Link>
          </div>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link
                  class="nav-link active"
                  to="/product"
                  aria-current="page"
                  href="#"
                  style={{ color: "#508a5f" }}
                >
                  Product
                </Link>
              </li>
              <li
                class="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link
                  class="nav-link active"
                  to="/promo"
                  style={{ color: "#508a5f" }}
                >
                  Promo
                </Link>
              </li>
              <li
                class="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link
                  class="nav-link active"
                  to="/testimonial"
                  style={{ color: "#508a5f" }}
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/promo">
          <Promo />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <GetStarted />
        </Route>
      </Switch>
    </Router>
  );
}
