import './App.css';
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CartPage from "./pages/CartPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>} exact={true}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
