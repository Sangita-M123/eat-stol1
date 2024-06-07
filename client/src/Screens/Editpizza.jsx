import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Success from "../Components/Success";
export default function Editpizza() {
  const params = useParams();
  //console.log(params);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getPizzaByIdState;
  const editpizzaState = useSelector((state) => state.editPizzaReducer);
  const { editloading, editerror, editsuccess } = editpizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id == params.pizzaid) {
        setName(pizza.name);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
      } else {
        dispatch(getPizzaById(params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(params.pizzaid));
    }
  }, [pizza, dispatch]);

  const formHandler = (e) => {
    e.preventDefault();
    const editedpizza = {
      _id: params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(editPizza(editedpizza));
    //console.log(updatedpizza); // Check if the pizza object is correctly formed
  };
  return (
    <div>
      <h2>Admin Panel</h2>
      <h2>Edit pizza</h2>
      <h1>pizza Id={params.pizzaid}</h1>
      <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {/* {success && <Success success="New pizza added successfully" />} */}
        {editsuccess && <Success success="pizza detail edited successfully" />}
        {editloading && <Loading />}
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Small variant price"
            value={smallPrice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Medium variant price"
            value={mediumPrice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Large variant price"
            value={largePrice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
