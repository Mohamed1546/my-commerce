import React from "react";
import Footer from '../comp/footer'
import Header from '../comp/header'
export default function D5() {
  return (
    <div>
      < Header />
      <div className="row">
        <div className="col-12">
          <h1>Kitchens</h1>
        </div>
      </div>
      <div className="container" id="c0">
        <div id="car" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#car" data-slide-to={0} className="active" />
            <li data-target="#car" data-slide-to={1} />
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    style={{ width: 400, }}
                    className="card-image"
                    src="https://i.ibb.co/zfg5M8N/f9.jpg"
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
                    src="https://i.ibb.co/Tr7ksJy/f10.jpg"
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
      < Footer />
    </div>
  );
}
