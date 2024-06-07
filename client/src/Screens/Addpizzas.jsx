import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Success from "../Components/Success";
import { addPizza } from "../actions/pizzaActions";

export default function AddPizzas() {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addPizzaState;

  const formHandler = (e) => {
    e.preventDefault();
    const pizza = {
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
    console.log(pizza); // Check if the pizza object is correctly formed
    dispatch(addPizza(pizza));
  };

  return (
    <div>
      <h1>Add Pizza</h1>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="New pizza added successfully" />}

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
          Add Pizza
        </button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from "../Components/Loading";
// import Error from "../Components/Error";
// import Success from "../Components/Success";
// import { addPizza } from "../actions/pizzaActions";

// export default function Addpizzas() {
//   const [name, setname] = useState("");
//   const [smallprice, setsmallprice] = useState("");
//   const [mediumprice, setmediumprice] = useState("");
//   const [largeprice, setlaregprice] = useState("");
//   const [image, setimage] = useState("");
//   const [description, setdescription] = useState("");
//   const [category, setcategory] = useState("");

//   const dispatch = useDispatch();
//   const addpizzastate = useSelector((state) => state.addPizzaReducer);
//   const { success, error, loading } = addpizzastate;

//   function formhandler(e) {
//     e.preventDefault();
//     const pizza = {
//       name,
//       image,
//       description,
//       category,
//       prices: {
//         small: smallprice,
//         medium: mediumprice,
//         large: largeprice,
//       },
//     };
//     console.log(pizza);
//     dispatch(addPizza(pizza));
//   }
//   return (
//     <div>
//       <div>
//         <h1>Add Pizza</h1>
//         {loading && <Loading />}
//         {error && <Error error="Something went wrong" />}
//         {success && <Success success="new pizza added successfully" />}

//         <form onSubmit={formhandler}>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="name"
//             value={name}
//             onChange={(e) => {
//               setname(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="small varient price"
//             value={smallprice}
//             onChange={(e) => {
//               setsmallprice(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="medium varient price"
//             value={mediumprice}
//             onChange={(e) => {
//               setmediumprice(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="large varient price"
//             value={largeprice}
//             onChange={(e) => {
//               setlaregprice(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="category"
//             value={category}
//             onChange={(e) => {
//               setcategory(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="description"
//             value={description}
//             onChange={(e) => {
//               setdescription(e.target.value);
//             }}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="image url"
//             value={image}
//             onChange={(e) => {
//               setimage(e.target.value);
//             }}
//           />
//           <button className="btn mt-3" type="submit">
//             Add Pizza
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
//https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg
//Mmmi Barbeque chicken with a topping of golden corn loaded with extra cheese. worth its weight in gold!
//Chicken Golden Delight
