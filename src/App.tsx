import React from 'react';
/*import {BrowserRouter as Router, Route, Switch} from "react-router-dom";*/
import './App.css';
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddEmployedComponent from "./components/AddEmployedComponent";

function App() {
    return (

        <div>
            <HeaderComponent/>
            {/*<AddEmployedComponent/>*/}
            <BrowserRouter>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/employees"} element={<ListEmployeesComponent/>}/>
                        <Route path={"/"} element={<ListEmployeesComponent/>}/>
                        <Route path={"/add-employee"} element={<AddEmployedComponent/>}></Route>
                    </Routes>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
