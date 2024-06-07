import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Pizza from "../Components/Pizza";
import { deletedPizza, getAllPizzas } from "../actions/pizzaActions";
import { Link } from "react-router-dom";
import Editpizza from "./Editpizza";
export default function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  const [show, setShow] = useState(true);
  const [hideData, setHideData] = useState(false);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <h2>Pizzas list</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <>
                  {show && (
                    <tr>
                      <td>{pizza.name}</td>
                      <td>
                        Small:{pizza.prices[0]["small"]} <br />
                        Medium:{pizza.prices[0]["medium"]} <br />
                        Large:{pizza.prices[0]["large"]}
                      </td>
                      <td>{pizza.category}</td>
                      <td>
                        <i
                          className="fa fa-trash m-1"
                          onClick={() => {
                            dispatch(deletedPizza(pizza._id));
                          }}
                        >
                          {" "}
                        </i>

                        <Link to={`/admin/editpizza/${pizza._id}`}>
                          <i className="fa fa-edit m-1"> </i>{" "}
                        </Link>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>

      {hideData && <h1>Edit pizza</h1>}
    </div>
  );
}
