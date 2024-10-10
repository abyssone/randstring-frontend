import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/home' element={ <StartPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
