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
                                <TextField name ="nombre" fullWidth label="Ingrese su nombre"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="apellido" fullWidth label="Ingrese su apellido"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name ="email" fullWidth label="Igresa tu email"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" name ="password" fullWidth label="Igresa tu contraseña"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>Enviar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
                
        );
    }
}

export default AddUsers;