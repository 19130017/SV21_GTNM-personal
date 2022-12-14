import React, { Component } from "react";
import Lab3_1 from "./Lab3_1";
import Lab3_2 from "./Lab3_2";
export default class Lab3 extends Component {
  render() {
    return (
      <div>
        {/* breadcrumb */}
        <div
          className="intro-section small"
          style={{
            backgroundImage: 'url("images/background.jpeg")',
            marginTop: "86px",
          }}
        >
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="intro">
                <p>Home / Lab 3</p>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}
        <section className="mr-5 ml-5 mt-5 tabs-section">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-lab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Requirement
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-design-lab"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
              >
                F-Pattern
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-implement-tab"
                data-toggle="tab"
                href="#nav-implement-lab"
                role="tab"
                aria-controls="nav-implement"
                aria-selected="false"
              >
                Z-pattern
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            {/* requirement */}
            <div
              className="tab-pane fade show active"
              id="nav-home-lab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ul>
                <p>
                  <strong>Y??u c???u: </strong>
                </p>
                <li>
                  <p>
                    Trong menu <strong>Labs</strong>, t???o 1 menu{" "}
                    <strong>Lab3 (file lab3.html)</strong> sau ???? t???o 2 tab{" "}
                    <strong>Ex1, Ex2</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ex1</strong>: Thi???t k??? m???t trang Web ????n gi???n s???
                    d???ng m???u <strong>F-pattern</strong>
                    <br />
                    ==&gt; chuy???n sang <strong>html (ex1.html)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ex2</strong>: Thi???t k??? m???t trang Web ????n gi???n s???
                    d???ng m???u <strong>Z-pattern</strong>
                    <br />
                    ==&gt; chuy???n sang <strong>html (ex2.html)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    V???i c??? <strong>Ex1, Ex2</strong>: T???o 2{" "}
                    <strong>tab Design v?? Implementation</strong>:
                  </p>
                  <ul>
                    <li>
                      <strong>Design</strong>: ch???p l???i h??nh ???nh ????? c?? c??i nh??n
                      t???ng quan v??? file thi???t k???,
                      <br />
                      c?? <strong>n??t Download</strong> ????? download file thi???t k???
                      v??? n???u mu???n
                    </li>
                    <li>
                      <strong>Implementation</strong>: n???i dung ph???n hi???n th???c
                      tr??n html
                    </li>
                  </ul>
                </li>
                <li>
                  Upload l??n <strong>Firebase / Github</strong>
                </li>
              </ul>
            </div>
            {/* end requirement */}

            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              {/* <Lab3_fpattern /> */}
              <Lab3_1 />
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <Lab3_2 />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
