import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';

const name = 'Nikolina 576';
const avatar = "https://avatars.githubusercontent.com/nikolina1901";
const status = true;

function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Contact 
        avatar={avatar}
        name={name}
        status={status}
        />
    </div>
  );
}

export default App;
