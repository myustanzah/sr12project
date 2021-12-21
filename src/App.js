// import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard"
import logoWA from "./assets/walogo.png"

function App() {
  return (
    <div className="App">
      <div id="bgTheme"></div>
      <Dashboard />
      <div id="middle">
      <a
          href="https://wa.me/+6285158433857"
          target="_blank"
          rel="noopener noreferrer"
      >
        <img src={logoWA} className="button" width="150" height="100" alt=""/>
      </a>
      </div>
    </div>
  );
}

export default App;
