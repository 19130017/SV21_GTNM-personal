import React, { Component } from "react";

export default class Lab3_1 extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link actice"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-design-f-pattern-lab"
              role="tab"
              aria-controls="nav-design-f-pattern"
              aria-selected="false"
            >
              Design
            </a>
            <a
              className="nav-item nav-link actice"
              id="nav-f-pattern-tab"
              data-toggle="tab"
              href="#nav-f-pattern-lab"
              role="tab"
              aria-controls="nav-f-pattern"
              aria-selected="false"
            >
              Implement
            </a>
          </div>
        </nav>
        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          {/* design */}
          <div
            className="tab-pane fade show active"
            id="nav-design-f-pattern-lab"
            role="tabpanel"
            aria-labelledby="nav-design-f-pattern-tab"
          >
            <div className="row p-3">
              <div className="col ml-5 pt-3 pb-3 pr-3 pl-3">
                <h3 className="text-center">1. Design on paper</h3>
                <img
                  src="images/f-paper.jpg"
                  height="400px"
                  width="480px"
                  alt=""
                />
                <div className="mt-2">
                  <button className="btn btn-info ">
                    <a
                      href="images/f-paper.jpg"
                      download="19130017-l3-f-paper"
                    >
                      Download
                    </a>
                  </button>
                </div>
              </div>
              <div className="col ml-5 pt-3 pb-3 pr-3 pl-3 mb-2 ">
                <h3 className="text-center">2. Design on HTML </h3>
                <img
                  src="images/f-html.png"
                  alt=""
                  height="400px"
                  width="480px"
                />
                <div className="mt-2">
                  <button className="btn btn-info">
                    <a href="images/f-html.png" download="19130017-l3-f-html">
                      {" "}
                      Download{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end design */}

          {/*  implement*/}
          <div
            className="tab-pane fade"
            id="nav-f-pattern-lab"
            role="tabpanel"
            aria-labelledby="nav-f-pattern-tab"
          >
            <div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-1.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>T???t t???n t???t v??? thu???c t??nh position trong CSS</h4>
                  <p>
                    Hi???u v??? thu???c t??nh position trong css - Khi b???n thi???t k??? c??c
                    layout cho website vi???c chuy???n t??? file thi???t k??? theo ?????nh...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-2.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    10 k??? n??ng quan tr???ng ????? t??m c??ng vi???c l???p tr??nh vi??n
                    frontend d???...
                  </h4>
                  <p>
                    D?? ??ang l?? sinh vi??n hay ???? l??m vi???c trong ng??nh c??ng ngh???
                    th??ng tin v??? m???ng l???p tr??nh web th?? nh???ng g?? m??nh...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-3.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>Th???i ?????i c???a Pixel Perfect Design ???? h???t t??? l??u</h4>
                  <p>
                    Khi b???t d???u d??n trang design cho web, h??y s??? d???ng nh???ng h???
                    th???ng grid ph??? bi???n hi???n nay nh?? Bootstrap Grid. N???u b???n...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-4.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>Principle thi???t k??? c???a c??c s???n ph???m n???i ti???ng</h4>
                  <p>
                    T??c gi???: L??u B??nh An Ph?? h???p cho c??c b???n thi???t k??? n??o ko
                    mu???n l??m code d???o, design d???o n???a, b???n mu???n c??i g??...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-5.jpg"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    24 code ES6 t??n ti???n ????? kh???c ph???c c??c l???i th???c h??nh
                    JavaScript
                  </h4>
                  <p>
                    T??i ????ch th??n t??? ch???n v??i tr??ch ??o???n nh???ng code h???u ??ch nh???t
                    t??? trang ???30secondsofcode???, v???n ???? l?? 1 ngu???n t??i nguy??n
                    tuy???t...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-6.jpg"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    Ngu???n t??? h???c web front-end v?? web configuration ngon b??? r???
                  </h4>
                  <p>
                    L???p tr??nh web l?? c??ng vi???c ????i h???i nhi???u k?? n??ng v?? ki???n
                    th???c chuy??n m??n kh??. C?? r???t nhi???u ph????ng ph??p ????? t???...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end implement */}
        </div>
      </div>
    );
  }
}
