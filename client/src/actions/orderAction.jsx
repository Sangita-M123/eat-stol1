import axios from "axios";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post(
      "https://b613090d-2c6f-40c7-b9ec-e422643b6202-00-xss54i8vqm9n.pike.repl.co/api/orders/placeorder",
      {
        token,
        subtotal,
        currentUser,
        cartItems,
      },
    );
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const response = await axios.post(
      "https://b613090d-2c6f-40c7-b9ec-e422643b6202-00-xss54i8vqm9n.pike.repl.co/api/orders/getuserorders",
      { userid: currentUser._id },
    );
    console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error.message });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_ALLORDERS_REQUEST" });
  try {
    const response = await axios.get(
      "https://b613090d-2c6f-40c7-b9ec-e422643b6202-00-xss54i8vqm9n.pike.repl.co/api/orders/getallorders",
    );
    console.log(response);
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: error.message });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://b613090d-2c6f-40c7-b9ec-e422643b6202-00-xss54i8vqm9n.pike.repl.co/api/orders/deliverorder",
      { orderid },
    );
    console.log(response);
    alert("order delivered successfully");
    const orders = await axios.get(
      "https://b613090d-2c6f-40c7-b9ec-e422643b6202-00-xss54i8vqm9n.pike.repl.co/api/orders/getallorders",
    );
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: orders.data });
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
