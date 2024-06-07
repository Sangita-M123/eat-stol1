import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get(
      "api/pizzas/getallpizzas",
    );
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error.message });
  }
};
export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZASBYID_REQUEST" });
  try {
    const response = await axios.post(
      "api/pizzas/getpizzabyid",
      { pizzaid },
    );
    console.log(response);
    dispatch({ type: "GET_PIZZASBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZASBYID_FAILED", payload: error.message });
  }
};
export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const response = await axios.post(
      "api/pizzas/addpizza",
      { pizza },
    );
    console.log(response);
    dispatch({ type: "ADD_PIZZA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error.message });
  }
};
export const editPizza = (editedpizza) => async (dispatch) => {
  dispatch({ type: "EDIT_PIZZA_REQUEST" });
  try {
    const response = await axios.post(
      "api/pizzas/editpizza",
      { editedpizza },
    );
    console.log(response);
    dispatch({ type: "EDIT_PIZZA_SUCCESS", payload: response.data });
    window.location.href = "/admin";
  } catch (error) {
    dispatch({ type: "EDIT_PIZZA_FAILED", payload: error.message });
  }
};
export const deletedPizza = (pizzaid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "api/pizzas/deletedpizza",
      { pizzaid },
    );
    alert("pizza deleted successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("something went wrong");
    console.log(error);
  }
};
