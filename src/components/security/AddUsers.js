import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Avatar, Button } from '@material-ui/core';
// import { LockOutLineIcon } from '@material-ui/icons'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
const style={
    paper:{
        marginTop:10,
        display:"flex",
        flexDireccion:"column",
        alignItems:"center"
    },
    avatar:{
        margin:8,
        backgroundColor:"#e53935"
    },
    form:{
        width:"100%",
        marginTop:10
    }, 
    submit:{
        marginTop:20,
        marginBuottom:20
    }
}
class AddUsers extends Component {
    state={
        user:{
            name:'',
            apellido:'',
            email:'',
            password:''
        }
    }

    onChange =e=>{
        let usuario= Object.assign({}, this.state.user)
        usuario[e.target.name]= e.target.value;
        this.setState({usuario:usuario})

    }
    registroUsuario= e=>{
        e.preventDefault();
        console.log('imprimir objeto del state del usuario')
    }
    render() {
        return (
            <Container maxWidth="md">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockTwoToneIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registre su cuenta 
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField name ="nombre" onChange={this.onChange} value ={this.state.user.name} fullWidth label="Ingrese su nombre"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="apellido" onChange={this.onChange} value ={this.state.user.apellido}fullWidth label="Ingrese su apellido"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="email" onChange={this.onChange} value ={this.state.user.email}fullWidth label="Ingresa tu email"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" name="password" onChange={this.onChange} value ={this.state.user.password}fullWidth label="Igresa tu contraseña"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" onClick={this.registroUsuario} variant="contained" fullWidth size="large" color="primary" style={style.submit}>Enviar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
                
        );
    }
}

export default AddUsers;