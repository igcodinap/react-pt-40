import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

// palabra clave function
// nombre de la función/componente
// paréntesis ---> spoiler:props
// llaves
// return (html/jsx) 
// Ctrl +d

function App(props) {
  console.log(props);
  return (
    <div className="App">
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
        <Button text="Click me!"/>
        <Button text="Presioname!!"/>
        <Button text="Clickeame!"/>
      </header>
    </div>
  );
}

export default App;
