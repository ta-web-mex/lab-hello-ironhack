import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
class App extends React.Component {
    render() {
        return (
            <div id="container">
                <Navbar />
                <MainContent />
                <Footer/>
            </div>
        );
    }
}

export default App;