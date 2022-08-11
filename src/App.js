import './App.css';
import Header from "./components/Header/Header"
import Pages from './components/Pages';
import { BrowserView} from "react-device-detect";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages /> 
    </div>
  );
}

export default App;
