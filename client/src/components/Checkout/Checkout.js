import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.addToCartProducts);

  const numburFormat = (num) => {
    return ((num * 100) / 100).toFixed(2);
  };
  let itemsPrice = numburFormat(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
  }, [cartItems.length, navigate]);

  const handleCheckOut = () => {
    navigate("/shipping");
  };

  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <table className="table table-borderless">
              <tbody>
                {cartItems.map((product) => {
                  const { title, price, qty, url, _id } = product;
                  return (
                    <tr
                      style={{ verticalAlign: "middle" }}
                      className="mb-4"
                      key={_id}
                    >
                      <td>
                        <img
                          src={url}
                          alt={title}
                          style={{
                            width: "8rem",
                            height: "8rem",
                            objectFit: "contain",
                          }}
                        />
                      </td>
                      <td>
                        <h2 className="text-uppercase text-primary">{title}</h2>
                      </td>
                      <td>
                        <h2 className="text-uppercase text-primary">
                          ${price}
                        </h2>
                      </td>
                      <td>
                        <h2 className="text-uppercase text-primary">
                          {qty} x ${price} = ${qty * price}
                        </h2>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="cart-details p-5 shadow ">
              <h2 className="text-uppercase p-4 bg-primary text-light text-center fw-bold">
                Cart Summary
              </h2>
              <div className="price my-3 d-flex align-items-center justify-content-between">
                <h2 className="text-uppercase text-secondary ">Total Items</h2>
                <h2 className="text-uppercase text-secondary ">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </h2>
              </div>
              <hr />

              <div className="price my-3 d-flex align-items-center justify-content-between">
                <h2 className="text-uppercase text-secondary "> Total Price</h2>
                <h2 className="text-uppercase text-secondary ">
                  ${itemsPrice}
                </h2>
              </div>
              <hr />
              <div className="price my-3 d-flex align-items-center justify-content-between">
                <button
                  className="btn-primary text-light text-uppercase btn-lg-rounded-0 p-4 fs-4 fw-bold px-5 w-100 border border-0"
                  disabled={cartItems.length === 0}
                  onClick={handleCheckOut}
                >
                  Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
