import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class NavBar extends Component {
    
    render() {
        return (
            <AppBar color='secondary' position="static">
                <Toolbar>
                    <IconButton edge="start" color="default" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6">
                    GCM
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}