import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// import { render } from '@testing-library/react';
import Furniture from './components/vistas/Furniture'
import AppNavbar from './components/layout/AppNavbar'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme'
class App extends Component {
    render() {
        return ( <
            AppNavbar >
            <
            MuiThemeProvider theme = { theme } >
            <
            Furniture / >
            <
            /MuiThemeProvider> < /
            AppNavbar >
        )
    }
}
export default App;