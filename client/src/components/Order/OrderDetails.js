import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../Redux/Actions/orderActions";
import Loader from "../Loader/Loader";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orderDetails);

  const {
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
    orderItems,
    isDelivered,
    isPaid,
  } = order ? order : {};
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);
  return (
    <section className="py-5 orderDetails">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            {loading && <Loader />}
            {error && (
              <h2 className="p-3 bg-danger text-center text-light">{error}</h2>
            )}
            {!loading && (
              <div className="row mb-5">
                <div className="p-4 border border-1">
                  <table className="table table-borderless caption-top">
                    <caption>
                      <h2 className="text-uppercase text-primary  border-bottom pb-3">
                        Shipping Information
                      </h2>
                    </caption>
                    <tbody>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">Address </h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {shippingAddress?.address}
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">Phone </h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {shippingAddress?.phone}
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">City </h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {shippingAddress?.city}
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">Country </h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {shippingAddress?.country}
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="p-4 border border-1 mt-4">
                <table className="table table-borderless caption-top">
                  <caption>
                    <h2 className="text-uppercase text-primary  border-bottom pb-3">
                      user Information
                    </h2>
                  </caption>
                  <tbody>
                    <tr>
                      <th>
                        <h3 className="text-uppercase">username</h3>
                      </th>

                      <td>
                        <h3 className="text-uppercase">{userInfo.username}</h3>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <h3 className="text-uppercase">EMAIL ADDRESS</h3>
                      </th>

                      <td>
                        <h3 className="">{userInfo.email}</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
                <div className="p-4 border border-1 mt-4">
                  <table className="table table-borderless caption-top">
                    <caption>
                      <h2 className="text-uppercase text-primary  border-bottom pb-3">
                        order Information
                      </h2>
                    </caption>
                    <tbody>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">Paid Status</h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {isPaid ? "Paid" : "unpaid"}
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <h3 className="text-uppercase">Delivered</h3>
                        </th>

                        <td>
                          <h3 className="text-uppercase">
                            {isDelivered ? "Delivered" : "pending"}
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border border-1 mt-4">
                  <h2 className="text-uppercase text-primary  border-bottom pb-3">
                    product Information
                  </h2>

                  <table className="table table-borderless">
                    <tbody>
                      {orderItems?.map((product) => {
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
            )}
          </div>
          {!loading && (
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="cart-details p-5 shadow ">
                <h2 className="text-uppercase p-4 bg-primary text-light text-center fw-bold">
                  order Details
                </h2>

                <div className="items my-3 d-flex align-items-center justify-content-between">
                  <h4 className="text-uppercase text-secondary ">
                    Total Items
                  </h4>
                  <h4 className="text-uppercase text-secondary ">
                    {orderItems?.reduce((acc, item) => acc + item.qty, 0)}
                  </h4>
                </div>
                <hr />

                <div className="items my-3 d-flex align-items-center justify-content-between">
                  <h4 className="text-uppercase text-secondary ">
                    items Price
                  </h4>
                  <h4 className="text-uppercase text-secondary ">
                    $
                    {orderItems?.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )}
                  </h4>
                </div>
                <hr />
                <div className="items my-3 d-flex align-items-center justify-content-between">
                  <h4 className="text-uppercase text-secondary "> Tax Price</h4>
                  <h4 className="text-uppercase text-secondary ">
                    ${taxPrice}
                  </h4>
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
                  <h4 className="text-uppercase text-secondary ">
                    Total Price
                  </h4>
                  <h4 className="text-uppercase text-secondary ">
                    ${totalPrice}
                  </h4>
                </div>

                <div className="price my-3 d-flex align-items-center justify-content-between">
                  <button
                    className="btn-primary text-light text-uppercase btn-lg-rounded-0 p-4 fs-4 fw-bold px-5 w-100 border border-0"
                    onClick={handleSumbit}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
