import "./styles/global.scss";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TextEditor from "./components/TextEditor";
import { AppProvider } from "./contexts/AppContext";

function App() {
    return (
        <AppProvider>
            <div id="App">
                <TextEditor />
                <SideBar />
                <Header />
            </div>
        </AppProvider>
    );
}

export default App;
