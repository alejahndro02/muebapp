import React, { Component } from 'react';
// import { Grid } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import './App.css';
// import { render } from '@testing-library/react';
import Furniture from './components/vistas/Furniture'
import AppNavbar from './components/layout/AppNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme'
import AddUsers from './components/security/AddUsers'

class App extends Component {
    render() {
        return ( 
        <Router >
            <MuiThemeProvider theme = { theme } >
                <AppNavbar / >
                <Grid container >
                    <Switch >
                        <Route path = "/" exact component = { Furniture }/>
                        <Route path = "/auth/adduser" exact component = { AddUsers }/>
                    </Switch > 
                </Grid > 
            </MuiThemeProvider > 
        </Router >
        )
    }
}
export default App;