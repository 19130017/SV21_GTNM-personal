import React, { Component } from "react";
export default class Lab1 extends Component {
  render() {
    return (
      <div className="lab1">
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
                <p>Home / Lab 1</p>
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
                Design
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
                Implement
              </a>
            </div>
          </nav>

          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-lab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {/* requirement */}
              <ul>
                <li>
                  <p>
                    <b> Y??u c???u: </b> Ch???n 1 ?????i t?????ng b???t k??? trong th??? gi???i
                    th???c, v?? d??? l???p m??n h???c, gi???ng vi??n,??? Sau ???? thi???t k??? ch???c
                    n??ng Qu???n l?? ?????i t?????ng ???? tr??n html bao g???m c??c t??nh n??ng
                    th??m, s???a, x??a, t??m ki???m cho ?????i t?????ng ????. V?? d???, l??m ch???c
                    n??ng Qu???n l?? Sinh vi??n, bao g??m t??nh n??ng th??m, s???a, x??a,
                    t??m ki???m. Ch?? ??: C??c th??nh vi??n trong nh??m kh??ng ???????c ch???n
                    c??c ?????i t?????ng gi???ng nhau.
                  </p>
                </li>
                <li>
                  <p>
                    <b>H?????ng d???n: </b>T???o 1 menu <b>Lab 1</b> tr??n website c??
                    nh??n (s??? d???ng th??? "a" trong html) bao g???m c??c tab sau:
                  </p>
                </li>

                <ul>
                  <li>
                    <p>
                      Tab <strong>Requirement</strong>: copy l???i n???i dung c???a
                      ph???n 1 ??? tr??n <strong>(Y??u c???u)</strong> v??o ????y (v?? tr??nh
                      b??y l???i cho ?????p)
                    </p>
                  </li>
                  <li>
                    <p>
                      Tab <strong>Design</strong>: ????? link t???i c??c file sau ????y:
                    </p>
                    <ul>
                      <li>
                        <p>Thi???t k??? tr??n gi???y (ch???p l???i ???nh)</p>
                      </li>
                      <li>
                        <p>Ch???p l???i m??n h??nh ???? thi???t k??? tr??n html</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Tab <strong>Implement</strong>: l?? trang html c???a ch???c
                      n??ng Qu???n l?? ????
                    </p>
                  </li>
                </ul>
                <p />
                <li>
                  <p>
                    {" "}
                    Sau khi l??m xong, upload to??n b??? l??n website c?? nh??n tr??n
                    firebase.
                  </p>
                </li>
              </ul>
              {/* end requirement */}
           
            </div>
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              {/* design */}
              <div className="row p-3">
                <div className="col ml-5">
                  <h3 className="text-center">1. Design on paper</h3>
                  <img
                    src="images/l1-1.jpg"
                    height="400px"
                    width="500px"
                    alt=""
                  />
                  <div className="mt-2">
                    <button className="btn btn-info ">
                      <a href="images/l1-1.jpg" download="19130017-l1-1-paper">
                        Download
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col ml-5 mb-2 ">
                  <h3 className="text-center">1. Design on paper </h3>
                  <img
                    src="images/l1-2.jpg"
                    alt=""
                    height="400px"
                    width="500px"
                  />
                  <div className="mt-2">
                    <button className="btn btn-info">
                      <a href="images/l1-2.jpg" download="19130017-l1-2-paper">
                        {" "}
                        Download{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col ml-5">
                  <h3 className="text-center">2. Design on HTML</h3>
                  <img
                    src="images/l1-1-html.png"
                    height="400px"
                    width="100%"
                    alt=""
                  />
                  <div className="mt-2">
                    <button className="btn btn-info ">
                      <a
                        href="images/l1-1-html.png"
                        download="19130017-l1-1-html"
                      >
                        Download
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col ml-5">
                  <h3 className="text-center">2. Design on HTML</h3>
                  <img
                    src="images/l1-2-html.png"
                    height="400px"
                    width="100%"
                    alt=""
                  />
                  <div className="mt-2">
                    <button className="btn btn-info ">
                      <a
                        href="images/l1-2-html.png"
                        download="19130017-l1-2-html"
                      >
                        Download
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            {/* end design */}
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              {/* implement */}
              <div className="d-flex justify-content-around">
                <h2 className> Rental book management</h2>
                <div className="d-flex">
                  <button id="show" className="btnAdd" onclick="showForm()">
                    Add
                  </button>
                  <button id="hide" className="btnClose" onclick="showForm()">
                    Close
                  </button>
                </div>
              </div>
              {/* form */}
              <div id="form-open" className="form-open">
                <form>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className="mt-2 ml-2 mb-2 mr-2 h5">ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="idRes"
                        placeholder="Enter id register"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <label className="mt-2 ml-2 mb-2 mr-2 h5">
                        Borrower name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameBr"
                        placeholder="Enter borrower name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className="mt-2 ml-2 mb-2 mr-2 h5">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <label
                        htmlFor="inputState"
                        className="mt-2 ml-2 mb-2 mr-2 h5"
                      >
                        Category
                      </label>
                      <select id="inputState" className="form-control">
                        <option selected>Novel</option>
                        <option>Comic</option>
                        <option>Anecdote</option>
                        <option>Autobiography</option>
                        <option>Folk Tale &amp;&amp; Fairy Tale</option>
                        <option>Myth</option>
                        <option>Fable</option>
                        <option>Book</option>
                        <option>Dictionary</option>
                        <option>Funny story</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className="mt-2 ml-2 mb-2 mr-2 h5">
                        Date borrowed
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateBor"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <label className="mt-2 ml-2 mb-2 mr-2 h5">
                        Date returned
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateReturn"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group ">
                      <button className="form-button" id="saveBtn">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
                {/* end form */}
              </div>
              {/* search button */}
              <div>
                <form className="row ml-2">
                  <div className="d-flex justify-content-end">
                    <div className="col form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="searchInput"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </form>
                {/* end search */}
                <table id="table" className="table">
                  {/* table head */}
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Borrower</th>
                      <th>Titile</th>
                      <th>Category</th>
                      <th>Date borrowed </th>
                      <th>Date returned</th>
                      <th>Function</th>
                    </tr>
                  </thead>
                  {/* end table head */}
                  {/* content table */}
                  <tbody id="mytable">
                    <tr>
                      <td className="idRes">02</td>
                      <td className="nameBr">Do Thanh Binh</td>
                      <td className="title">Harry Poster</td>
                      <td className="inputState">Novel</td>
                      <td className="bor">2021-4-20</td>
                      <td className="return">2021-4-23</td>
                      <td>
                        <a
                          className="remove"
                          data-toggle="tooltip"
                          title="Delete"
                          href="#"
                        >
                          {" "}
                          <i className="fa fa-remove" />
                        </a>
                        {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="idRes">02</td>
                      <td className="nameBr">Do Thanh Binh</td>
                      <td className="title">Java Core</td>
                      <td className="inputState">Book</td>
                      <td className="bor">2021-4-20</td>
                      <td className="return">2021-4-23</td>
                      <td>
                        <a
                          className="remove"
                          data-toggle="tooltip"
                          title="Delete"
                          href="#"
                        >
                          {" "}
                          <i className="fa fa-remove" />
                        </a>
                        {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="idRes">02</td>
                      <td className="nameBr">Do Thanh Binh</td>
                      <td className="title">Head First Design Patterns</td>
                      <td className="inputState">Book</td>
                      <td className="bor">2021-4-20</td>
                      <td className="return">2021-4-23</td>
                      <td>
                        <a
                          className="remove"
                          data-toggle="tooltip"
                          title="Delete"
                          href="#"
                        >
                          {" "}
                          <i className="fa fa-remove" />
                        </a>
                        {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="idRes">05</td>
                      <td className="borrower">Huynh Huu An</td>
                      <td className="titles">Greek mythology</td>
                      <td className="category">Myth</td>
                      <td className="dateBor">2021-4-21</td>
                      <td className="returnBor">2021-4-26</td>
                      <td>
                        <a
                          className="remove"
                          data-toggle="tooltip"
                          title="Delete"
                          href="#"
                        >
                          {" "}
                          <i className="fa fa-remove" />
                        </a>
                        {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="idRes">05</td>
                      <td className="nameBr">Huynh Huu An</td>
                      <td className="title">Head First Design Patterns</td>
                      <td className="inputState">Book</td>
                      <td className="bor">2021-4-20</td>
                      <td className="return">2021-4-23</td>
                      <td>
                        <a
                          className="remove"
                          data-toggle="tooltip"
                          title="Delete"
                          href="#"
                        >
                          {" "}
                          <i className="fa fa-remove" />
                        </a>
                        {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* end implement */}
          </div>
        </section>
      </div>
    );
  }
}
