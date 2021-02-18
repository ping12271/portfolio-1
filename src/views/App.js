import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import Template from "./components/Layout/Template";
import {GlobalStyle} from "../styled/Reset.Styled";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                </Switch>
            </Template>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
