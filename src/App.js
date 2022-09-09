import './App.css';
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HomePage/>
            </div>
        </BrowserRouter>
    );
}

export default App;
