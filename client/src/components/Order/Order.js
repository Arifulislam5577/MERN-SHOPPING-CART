import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Order = () => {
  const key = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
  const [paySuccess, setPaySuccess] = useState(false);
  const [Stripetoken, setStripetoken] = useState(null);

  const navigate = useNavigate();
  const { cartItems, shippingInfo } = useSelector(
    (state) => state.addToCartProducts
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const numburFormat = (num) => {
    return ((num * 100) / 100).toFixed(2);
  };
  const totalItems = numburFormat(
    cartItems.reduce((acc, item) => acc + item.qty * 1, 0)
  );
  const itemsPrice = numburFormat(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const taxPrice = numburFormat(itemsPrice * 0.05);
  const shippingPrice = numburFormat(itemsPrice > 500 ? 0 : 25);
  const totalPrice = numburFormat(
    itemsPrice * 1 + taxPrice * 1 + shippingPrice * 1
  );

  const handleSumbit = () => {
    const orderCalculation = {
      totalItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    };

    sessionStorage.setItem(
      "orderCalculation",
      JSON.stringify(orderCalculation)
    );
    navigate("/order/confirm");
  };

  const onToken = (token) => {
    setStripetoken(token);
  };

  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
  }, [cartItems.length, navigate]);

  useEffect(() => {
    const stripebcend = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const res = await axios.post(
          "http://localhost:5000/api/v1/payment",
          { tokenId: Stripetoken.id, amount: totalPrice },
          config
        );

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    Stripetoken && stripebcend();
  }, [Stripetoken, totalPrice, userInfo.token]);
  console.log(Stripetoken);
  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="row mb-5">
              <h2 className="text-uppercase text-primary">
                Shipping Information
              </h2>
              <hr />
              <h3 className="text-uppercase">
                Address : {shippingInfo.address}
              </h3>
              <h3 className="text-uppercase">Phone : {shippingInfo.phone}</h3>
              <h3 className="text-uppercase">City : {shippingInfo.city}</h3>
              <h3 className="text-uppercase">
                Country : {shippingInfo.country}
              </h3>
              <h2 className="text-uppercase  text-primary mt-4">
                user Information
              </h2>
              <hr />

              <h3 className="text-uppercase">username : {userInfo.username}</h3>
              <h3 className="">EMAIL ADDRESS : {userInfo.email}</h3>

              <h2 className="text-uppercase  text-primary mt-4">
                order Information
              </h2>
              <hr />
              <h3 className="text-uppercase">Paid : unpaid</h3>
              <h3 className="text-uppercase">Delivered : pending</h3>
            </div>
            <div className="row">
              <h2 className="text-uppercase  text-primary mt-4">
                product Information
              </h2>
              <hr />
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
                          <h2 className="text-uppercase text-primary">
                            {title}
                          </h2>
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
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="cart-details p-5 shadow ">
              <h2 className="text-uppercase p-4 bg-primary text-light text-center fw-bold">
                order Summary
              </h2>
              <div className="items my-3 d-flex align-items-center justify-content-between">
                <h4 className="text-uppercase text-secondary ">Total Items</h4>
                <h4 className="text-uppercase text-secondary ">{totalItems}</h4>
              </div>
              <hr />

              <div className="items my-3 d-flex align-items-center justify-content-between">
                <h4 className="text-uppercase text-secondary "> items Price</h4>
                <h4 className="text-uppercase text-secondary ">
                  ${itemsPrice}
                </h4>
              </div>
              <hr />
              <div className="items my-3 d-flex align-items-center justify-content-between">
                <h4 className="text-uppercase text-secondary "> Tax Price</h4>
                <h4 className="text-uppercase text-secondary ">${taxPrice}</h4>
              </div>
              <hr />
              <div className="items my-3 d-flex align-items-center justify-content-between">
                <h4 className="text-uppercase text-secondary ">Shipping</h4>
                <h4 className="text-uppercase text-secondary ">
                  ${shippingPrice}
                </h4>
              </div>
              <hr />
              <div className="items my-3 d-flex align-items-center justify-content-between">
                <h4 className="text-uppercase text-secondary ">Total Price</h4>
                <h4 className="text-uppercase text-secondary ">
                  ${totalPrice}
                </h4>
              </div>
              {paySuccess && (
                <div className="price my-3 d-flex align-items-center justify-content-between">
                  <button
                    className="btn-primary text-light text-uppercase btn-lg-rounded-0 p-4 fs-4 fw-bold px-5 w-100 border border-0"
                    disabled={cartItems.length === 0}
                    onClick={handleSumbit}
                  >
                    Order Now
                  </button>
                </div>
              )}
              {!paySuccess && (
                <div className="price my-3 d-flex align-items-center justify-content-between">
                  <StripeCheckout
                    name="E-SHOP"
                    image="https://image.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?w=740"
                    description={`You total is $${totalPrice}`}
                    amount={totalPrice * 100}
                    token={onToken}
                    stripeKey={key}
                  >
                    <button className="btn-primary text-light text-uppercase btn-lg-rounded-0 p-4 fs-4 fw-bold px-5 w-100 border border-0">
                      Pay Now
                    </button>
                  </StripeCheckout>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
