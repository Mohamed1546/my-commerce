import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <div className="row">
          <div className="col-3">
            <div className="dropdown">
              <a className="btn" data-toggle="dropdown" id="collapse">
                <i className="fa-solid fa-bars" style={{ scale: "1.4" }} />
              </a>
              <div
                className="dropdown-menu"
                style={{ backgroundColor: "rgb(238, 232, 232)", width: 200 }}
              >
                <li className="dropdown-item">
                  <a href="/d1" id="a1">
                    1_Home...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d2" id="a1">
                    2_Sallon
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d3" id="a1">
                    3_modern sofa
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d4" id="a1">
                    4_Sofa
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d5" id="a1">
                    5_Kitchen
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d6" id="a1">
                    6_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d7" id="a1">
                    7_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d8" id="a1">
                    8_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d9" id="a1">
                    9_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d10" id="a1">
                    10_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d11" id="a1">
                    11_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d12" id="a1">
                    12_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d13" id="a1">
                    13_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d14" id="a1">
                    14_...
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/d15" id="a1">
                    15_...
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="col-3" />
          <div className="col-3">
            <a href style={{ color: "black", fontWeight: "bold" }}>
              Sign in
            </a>
          </div>
          <div className="col-3" />
        </div>
      </header>
      <div className="col-12" style={{height: 60}}></div>
      <div className="row" id="h1">
        <div className="col-8">
          <img
            src="https://i.ibb.co/mHnq7c9/m3.png"
            style={{ width: 300, borderRadius: 20 , }}
            id="im2"
          />
          <h3>
            <i id="ii" style={{ fontWeight: "bold",border: "solid", }}>Furniture Decor , shelves</i>
          </h3>
          <br />
        </div>
        <div className="col-3">
          <img
            src="https://i.ibb.co/0ZBN0T4/m1.jpg"
            style={{ width: 300, borderRadius: 20,marginTop: 20 , }}
            id="im2"
          />
        </div>
        <div className="col-2" />
      </div>
    </div>
  );
}
