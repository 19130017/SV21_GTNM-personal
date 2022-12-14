import React, { Component } from "react";


export default class Result extends Component {
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
                <p>Home / Result</p>
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
                href="#nav-evaluate-lab"
                role="tab"
                aria-controls="nav-evaluate"
                aria-selected="false"
              >
                Evaluate
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-cumulativelessons-tab"
                data-toggle="tab"
                href="#nav-cumulativelessons-lab"
                role="tab"
                aria-controls="nav-cumulativelessons"
                aria-selected="false"
              >
                Cumulative lessons
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
                  T???o m???t <strong>trang Result</strong> tr??n ???? li???t k?? nh???ng g??
                  m??nh ???? l??m/h???c ???????c trong su???t qu?? tr??nh l??m b??i t???p nh??m.
                  <br /> D???n link t???i t???ng trang do SV ???? l??m.
                </li>
                <li>
                  T??? ????nh gi?? m??nh ???????c{" "}
                  <strong>bao nhi??u % trong t???ng s??? 100%</strong>
                  c???a b??i t???p nh??m
                </li>
              </ul>
            </div>
            {/* end requirement */}

            {/* evaluate */}
            <div
              className="tab-pane fade"
              id="nav-evaluate-lab"
              role="tabpanel"
              aria-labelledby="nav-evaluate-tab"
            >
              <div className="contain">
                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-user mr-1" />
                        Personal Web
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>L??m b??i t???p ?????y ?????</li>
                          <li>??p d???ng ???????c ReactJS v??o website</li>
                          <li>Ho??n thi???n ???????c website c?? nh??n</li>
                          <li>Ch??a bi???t ph???i m??u</li>
                        </ol>
                      </p>
                      <li>Ho??n th??nh: 100%</li>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-users mr-1" />
                        Group Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Ho??n thi???n trang groupdiary</li>
                          <li>Ho??n thi???n trang technical</li>
                          <li>Chuy???n web sang react</li>
                        </ol>
                      </p>
                      <li>Ho??n th??nh: 100%</li>
                      <li>????ng g??p: 20%</li>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-globe mr-1" />
                        Project Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Ch???c n??ng ????ng k??</li>
                          <li>Ch???c n??ng ????ng nh???p</li>
                          <li>Chuy???n web sang react</li>
                        </ol>
                      </p>
                      <li>Ho??n th??nh: 100%</li>
                      <li>????ng g??p: 20%</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end evaluate */}

            {/* cumulativelessons */}
            <div
              className="tab-pane fade"
              id="nav-cumulativelessons-lab"
              role="tabpanel"
              aria-labelledby="nav-cumulativelessons-tab"
            >
              <div>
                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-user mr-1" />
                        Personal Web
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>C?? th??m ki???n th???c v??? UX/UI.</li>
                          <li>Bi???t th??m v??? HTML, CSS, ReactJS.</li>
                          <li>T???o ???????c website c?? nh??n theo ????ng y??u c???u.</li>
                          <li>Bi???t c??ch x??? l?? h??nh ???nh.</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-users mr-1" />
                        Group Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Bi????t ca??ch la??m vi????c nho??m</li>
                          <li>
                            Bi????t th??m kha?? n??ng la??m vi????c trong t????p th???? cu??a ba??n
                            th??n
                          </li>
                          <li>Nh???n ra ???????c ??i???m y???u khi l??m vi???c nh??m.</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-globe mr-1" />
                        Project Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>
                            Bi???t th??m th??ng tin v??? quy tr??nh c???a m???t ????? ??n
                          </li>
                          <li>Bi???t c??ch qu???n l?? th???i gian</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-user mr-1" />
                        Nh???n x??t v??? nh??m
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Mo??i ng??????i ??????u co?? tinh th????n ho??c t????p</li>
                          <li>Ti????p thu ki????n th????c nhanh</li>
                          <li>Nho??m tr??????ng ch??a co?? kinh nghi????m</li>
                          <li>
                            C??ng vi????c ph??n c??ng kh??ng ro?? ra??ng d????n ??????n ch????m ti????n
                            ??????
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end cumulativelessons */}
          </div>
        </section>
      </div>
    );
  }
}
