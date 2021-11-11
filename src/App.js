import "./App.css";
import { API_COURSES } from "./constants/api";
import DetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignUpScreen from "./Screens/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import SignInScreen from "./Screens/SignIn";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/detail/:id" element={<DetailScreen />} />
                <Route exact path="/signup" element={<SignUpScreen />} />
                <Route exact path="/signin" element={<SignInScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
