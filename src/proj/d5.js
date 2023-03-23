import React from "react";
import Footer from '../comp/footer'
import Header from '../comp/header'
export default function D5() {
  return (
    <div>
      < Header />
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
                    className="card-image"
                    src="https://pbs.twimg.com/media/DCaqsfoVYAEytxV.jpg:large"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    className="card-image"
                    src="https://kosto-stone.ru/upload/resize_cache/iblock/827/262_282_2/8278862096bef737ad74dc99e8cac0c7.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    className="card-image"
                    src="https://m.media-amazon.com/images/I/51ROtUj8PyL.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    className="card-image"
                    src="https://www.bvd.co.il/img/fck/image/commercial%20articles/%D7%A1%D7%99%20%D7%90%D7%99%D7%99%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C/%D7%90%D7%93%D7%95%D7%9D.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    className="card-image"
                    src="https://i.pinimg.com/originals/48/d2/95/48d29529f2ca2d83d09f8a339d4ed34c.jpg"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img
                    id="im1"
                    className="card-image"
                    src="https://th.bing.com/th/id/R.e52e0f5ff7037fd775a766cd0fcb7c0b?rik=jnihWFuruge83A&pid=ImgRaw&r=0"
                  />
                </div>
                <div className="col-6">
                  <h6>Table 100cm * 180cm</h6>
                  <a href>1520</a>
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
