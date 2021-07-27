import "./styles/global.scss";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TextEditor from "./components/TextEditor";

function App() {
    return (
        <div id="App">
            <Header />
            <SideBar />
            <TextEditor />
        </div>
    );
}

export default App;
