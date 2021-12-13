import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import Admin from "./container/AdminScreen";
import PageNotFound from "./container/PageNotFound";
import Customer from "./container/UserScreen";

// import ProfileEditScreen from "./container/UserScreen/ProfileEditScreen";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Customer} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
