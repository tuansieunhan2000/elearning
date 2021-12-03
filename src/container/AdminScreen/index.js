import React from "react";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../Components/Navbar";
import HomeAdmin from "./HomeAdmin";
import AddUserAdmin from "./AddUser";
import EditUserAdmin from "./EditUserInfo";

export default function Admin() {
    const match = useRouteMatch();
    console.log(`${match.url}/addUser`, `${match.url}/sedituser`);

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path={`/admin/adduser`} component={AddUserAdmin} />
                <Route exact path={`/admin/edituser`} component={EditUserAdmin} />
                <Route exact path="/admin" component={HomeAdmin} />
            </Switch>
        </>
    );
}
