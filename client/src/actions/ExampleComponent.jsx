// // ExampleComponent.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addPizza } from "./pizzaSlice"; // Import your action

// const ExampleComponent = () => {
//   const pizzas = useSelector((state) => state.pizzas);
//   const dispatch = useDispatch();

//   const handleAddPizza = () => {
//     dispatch(addPizza({ name: "Margherita" })); // Dispatch your action
//   };

//   return (
//     <div>
//       <h2>Pizzas:</h2>
//       <ul>
//         {pizzas.map((pizza) => (
//           <li key={pizza.name}>{pizza.name}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddPizza}>Add Pizza</button>
//     </div>
//   );
// };

// export default ExampleComponent;
