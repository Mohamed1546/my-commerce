import React from "react";
import Footer from '../comp/footer'
import Header from '../comp/header'
export default function Home() {
  return (
    <div>
      <Header />
      <div className="row" id="i2">
        <div className="col-12">
          <a href>
            <i
              style={{ marginTop: 20, scale: "1.5" }}
              className="fa-solid fa-cart-shopping"
              id="i"
            />
            <i style={{ color: "chocolate", fontWeight: "bold" }}> your CART</i>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-2">
          <h1 id="h">Modern Sofa</h1>
        </div>
        <div className="col-10" />
      </div>
      <div className="container" id="c0">
        <div
          id="carousel-example"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carousel-example" data-slide-to={0} />
            <li data-target="#carousel-example" data-slide-to={1} />
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    style={{ width: 400, }}
                    className="card-image"
                    src="https://i.ibb.co/s3Bf56K/f4.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6></h6>
                  <a  className="btn-primary">1520  OMR</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    style={{ width: 400, }}
                    className="card-image"
                    src="https://i.ibb.co/hXBDNCy/f3.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6></h6>
                  <a  className="btn-primary">1520  OMR</a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-example"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <h1 id="hh">Kitchens</h1>
        </div>
        <div className="col-6" />
      </div>
      <div className="container" id="c0">
        <div id="car" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#car" data-slide-to={0} className="active" />
            <li data-target="#car" data-slide-to={1} />
            <li data-target="#car" data-slide-to={2} />
            <li data-target="#car" data-slide-to={3} />
            <li data-target="#car" data-slide-to={4} />
            <li data-target="#car" data-slide-to={5} />
            <li data-target="#car" data-slide-to={6} />
            <li data-target="#car" data-slide-to={7} />
            <li data-target="#car" data-slide-to={8} />
            <li data-target="#car" data-slide-to={9} />
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    style={{ width: 400, }}
                    className="card-image"
                    src="https://i.ibb.co/7pqPLQW/f5.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6></h6>
                  <a  className="btn-primary">1520  OMR</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    style={{ width: 400, }}
                    className="card-image"
                    src="https://i.ibb.co/zFjWxrG/f6.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6></h6>
                  <a  className="btn-primary">1520  OMR</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#car" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#car" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h1 id="h3">About us</h1>
        </div>
        <div className="col-6" />
      </div>
      <div className="container" id="c3">
        <div className="row">
          <div className="col-12">
            <h5
              style={{
                color: "chocolate",
                fontWeight: "bold",
                marginLeft: "-30px",
              }}
            >
              Big experience at arts field to make furnitures to new houses with
              modern designs.
            </h5>
          </div>
          <div className="col-3">
            <h4 style={{ color: "rgb(8, 8, 8)" }}>Advanteges:</h4>
          </div>
          <div className="col-12">
            <h5
              style={{
                color: "chocolate",
                fontWeight: "bold",
                marginLeft: "-30px",
              }}
            >
              #cheap prices with strong materials which live many years without
              damges.
            </h5>
          </div>
          <div className="col-12">
            <h5
              style={{
                color: "chocolate",
                fontWeight: "bold",
                marginLeft: "-30px",
              }}
            >
              #we can make any shape you want at your house
            </h5>
          </div>
          <div className="col-12">
            <h5
              style={{
                color: "chocolate",
                fontWeight: "bold",
                marginLeft: "-30px",
              }}
            >
              #we can redesiegn yor home
            </h5>
          </div>
        </div>
      </div>
      < Footer />
    </div>
  );
}
