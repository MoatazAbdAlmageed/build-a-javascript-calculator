import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Calculator/>
                <Footer/>
            </div>
        );
    }
}

export default App;
