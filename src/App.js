import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
