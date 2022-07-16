import React, {useState } from "react"
import Footer from './components/footer';
import Header from './components/header';
import './App.css';

function App() {
    const [pages] = useState([
        {
            name: "about me"
        },{
            name: "portfolio"},
            {name: "contact"},
            {name: "resume"}
        
    ])
    const [currentPage, setCurrentPage] = useState(pages[0])
    return (
        <div className="App">
            <Header>
              TEST
            </Header>
            <main>
               
            </main>
        </div>
    );
}

export default App;