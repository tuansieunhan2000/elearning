import "./App.css";
import { API_COURSES } from "./constants/api";
import DetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignUpScreen from "./Screens/SignUp";

function App() {
    console.log(process.env.API_BASE);
    return (
        <>
            <HomeScreen />
            {/* <DetailScreen /> */}
            {/* <SignUpScreen /> */}
        </>
    );
}

export default App;
