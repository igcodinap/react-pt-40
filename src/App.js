import logo from './logo.svg';
import './App.css';
import Button  from './components/Button'; // ES6
import {Navbar} from './components/Navbar';

// palabra clave function
// nombre de la función/componente
// paréntesis ---> spoiler:props
// llaves
// return (html/jsx) 
// Ctrl +d

function App(props) {
  // console.log(props);
  return (
    <>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title} {props.date}
        </a>
        <Button text="Click me!" color="red"/> Button("Click me!")
        <Button text="Presioname!!" color="blue"/> Button("Presioname!!")
        <Button text="Clickeame!" color="green"/> Button("Clickeame!")
      </header>
    </div>
    </>
  );
}

export default App;
