import { Provider } from "react-redux";
import Contador from "./components/Contador";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div style={{textAlign: "center"}}>
                <h1>REDUX</h1>
                <hr></hr>
                <CrudApi></CrudApi>
                <hr></hr>
                <ShoppingCart></ShoppingCart>
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
