import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
      <div className="row">
        <div className="col-6">
          <h1 id="h4">Contact us</h1>
        </div>
        <div className="col-6" />
      </div>
      <div className="container" id="c4">
        <div className="row">
          <div className="col-12">
            <h4>
              <div className="row">
                <div className="col-12">
                  <h4>Our bransh is in Oman.</h4>
                  <h4>We are online now and will open at middle of the city</h4>
                </div>
                <div className="col-7">
                  <h4 id="a2">
                    <i className="fa-sharp fa-solid fa-phone" />
                    +968953866
                  </h4>
                  <h4 id="a2">
                    <i className="fa-sharp fa-solid fa-phone" />
                    +968276769
                  </h4>
                </div>
                <div className="col-12">
                  <a href="#">
                    <i className="fa-brands fa-instagram" id="a2" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook" id="a2" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp" id="a2" />
                  </a>
                </div>
              </div>
            </h4>
          </div>
        </div>
      </div>
        <h6 id="h6">
          <i
            style={{
              color: "rgb(175, 26, 6)",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Designed by Ahmed El Baloshy copyright<i>  </i> 
          </i>
          @ 2023
        </h6>
      </footer>
    </div>
  );
}
