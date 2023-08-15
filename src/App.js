import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <Main posts={props.posts}/>
            <Footer />
        </div>
    );
}

export default App;
