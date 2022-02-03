import React from "react";

const Cart = () => {
  return (
    <section className="py-5" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <table
              className="table table-borderless"
              style={{ verticalAlign: "middle" }}
            >
              <tbody>
                <tr style={{ verticalAlign: "baseline" }}>
                  <td>
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377240/Shopping-cart/new3_kulozt.png"
                      alt=""
                      className="bg-dark"
                      style={{
                        height: "8rem",
                        width: "8rem",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td>
                    <h3>Khaki Color</h3>
                  </td>
                  <td>
                    <h3>$250</h3>
                  </td>
                  <td className="d-flex align-items-bottom justify-content-center gap-3">
                    <button className="btn btn-dark fs-4 p-1 px-3 rounded-0 text-light fw-bold">
                      +
                    </button>
                    <span className="fs-3 fw-bold">2</span>
                    <button className="btn btn-dark fs-4 p-1 px-3 rounded-0 text-light fw-bold">
                      -
                    </button>
                  </td>
                  <td>
                    <h3>2 x $250</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377240/Shopping-cart/new3_kulozt.png"
                      alt=""
                      className="bg-dark"
                      style={{
                        height: "8rem",
                        width: "8rem",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td>
                    <h4>Khaki Color</h4>
                  </td>
                  <td>$250</td>
                  <td>
                    <span>+</span>
                    <span>2</span>
                    <span>-</span>
                  </td>
                  <td>2 x $250</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377240/Shopping-cart/new3_kulozt.png"
                      alt=""
                      className="bg-dark"
                      style={{
                        height: "8rem",
                        width: "8rem",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td>
                    <h4>Khaki Color</h4>
                  </td>
                  <td>$250</td>
                  <td>
                    <span>+</span>
                    <span>2</span>
                    <span>-</span>
                  </td>
                  <td>2 x $250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
