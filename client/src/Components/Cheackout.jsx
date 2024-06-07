import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderAction";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log("tokensssss", token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="your order placed successfully" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51P7EjESDbe3uNTpqNg2alNnVeENXoSXWPvip9ujN5QMzNVzvKyEkfCpCNbEH2iznJW24ORp33q9GwRgvj27eXNHb00vfMGr3P6"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
