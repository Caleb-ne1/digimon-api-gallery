import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Digimons from './components/Digimons';
import DigimonDetail from './components/DigimonDetail';

function App() {
  return (
    <div className="App bg-slate-100 main">
        <BrowserRouter>
         <Navbar />
            <Routes>
                <Route path="/" element={<Digimons />} />
                <Route path="/digimon-details/:id" element={<DigimonDetail />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
