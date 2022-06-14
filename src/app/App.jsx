import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../routes/Main";

export const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </BrowserRouter>
    );
};


