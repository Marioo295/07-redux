import { Provider } from "react-redux";
import Contador from "./components/Contador";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div style={{textAlign: "center"}}>
                <h1>REDUX</h1>
                <hr></hr>
                <Contador></Contador>
                <hr></hr>
                <TeoriaRedux></TeoriaRedux>
                <hr></hr>
            </div>
        </Provider>
    );
}

export default App;
