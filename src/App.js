import React, { Component } from 'react';
// import { Grid } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import theme from './theme/theme'
import './App.css';
// import { render } from '@testing-library/react';
import Furniture from './components/vistas/Furniture'
import AppNavbar from './components/layout/AppNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
class App extends Component {
    render() {
        return ( 
        <Router >
            <MuiThemeProvider theme = { theme } >
                <AppNavbar / >
                <Grid container >
                    <Switch >
                    <Route path = "/"
                    exact component = { Furniture }/>   
                    </Switch > 
                </Grid > 
            </MuiThemeProvider > 
        </Router >
        )
    }
}
export default App;