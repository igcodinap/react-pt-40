import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const htmlElement = document.getElementById("root"); // HTMLElement ---> Object
const root = ReactDOM.createRoot(htmlElement); // React.Root ---> Object

//////////// CASO 1 ////////////
// let counter = 0;

// function CounterDisplay(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.counter}</p>
//       <button onClick={props.onIncrement}>Increment</button>
//       <button onClick={props.onDecrement}>Decrement</button>
//     </div>
//   );
// }

// function tick() {
//   const element = (
//     <CounterDisplay
//       title="Counter"
//       counter={counter}
//       onIncrement={() => {
//         counter++;
//         console.log(counter)
//       }}
//       onDecrement={() => {
//         counter--
//         console.log(counter)
//       }}
//     />
//   );

//   root.render(element, document.getElementById('root')); // -----> montaje
// }

// setInterval(tick, 1000);

//////////// CASO 2 ////////////
// let counter = 0;

// function CounterDisplay(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.counter}</p>
//       <button onClick={props.onIncrement}>Increment</button>
//       <button onClick={props.onDecrement}>Decrement</button>
//     </div>
//   );
// }

// const element = (
//   <CounterDisplay
//     title="Counter"
//     counter={counter}
//     onIncrement={() => {
//       counter++;
//       console.log(counter);
//     }}
//     onDecrement={() => {
//       counter--;
//       console.log(counter);
//     }}
//   />
// );

// root.render(element, document.getElementById("root")); // -----> montaje

//////////// CASO 2.1 ////////////
// let counter2 = 10;
// function CounterDisplay() {
//   console.log(counter2);

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>{counter2}</p>
//       <button onClick={() => counterPlusMinus("plus")}>Increment</button>
//       <button onClick={() => counterPlusMinus("minus")}>Decrement</button>
//     </div>
//   );
// }

// root.render(<CounterDisplay />, document.getElementById("root"));

// function counterPlusMinus(operation) {
//   if (operation === "plus") {
//     counter2++;
//     console.log(counter2);
//   } else {
//     counter2--;
//     console.log(counter2);
//   }
// }

//////////// CASO 3 //////////// HOOKS!

// function CounterDisplay() {
//   const [counter, setCounter] = useState(10000); 
// // se usan dentro de un componente
// // const [nombre de la variable, nombre de la funcion que actualiza la variable] = 
// // useState(valor inicial de la variable)
//   console.log(counter);

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>{counter}</p>
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//       <button onClick={() => setCounter(counter-1)}>Decrement</button>
//     </div>
//   );
// }

// root.render(<CounterDisplay />, document.getElementById("root"));

//////////// CASO 4 //////////// MAL

// function CounterDisplay() {
//   let [counter, setCounter] = useState(10000);

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>{counter}</p>
//       <button onClick={() => {
//         counter++
//         console.log(counter)
//         }}>Increment</button>
//       <button onClick={() => {
//         counter--
//         console.log(counter)
//         }}>Decrement</button>
//     </div>
//   );
// }

// root.render(<CounterDisplay />, document.getElementById("root"));

//////////// CASO 5 //////////// HOOKS * 2

function CounterDisplay() {
  const [counter, setCounter] = useState(10000); 
  const [counter2, setCounter2] = useState(1000000000000);

// se usan dentro de un componente
// const [nombre de la variable, nombre de la funcion que actualiza la variable] = 
// useState(valor inicial de la variable)
  console.log(counter);

  return (
    <div>
      <h1>Counter</h1>
      <p>C1: {counter}</p>
      <p>C2: {counter2}</p>
      <button onClick={() => setCounter(counter+1)}>Increment C1</button>
      <button onClick={() => setCounter2(counter2 + 1000000)}>Increment C2</button>
    </div>
  );
}

root.render(<CounterDisplay />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
