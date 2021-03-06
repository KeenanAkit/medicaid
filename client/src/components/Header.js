import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'white'
    }
});
const navLinks = [
    { title: "Login", path: '/login'},
    { title: "Sign Up", path: '/signup'}
]

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ backgroundColor: "#64AFF3"}}>
            <Toolbar>
                <Container className = {classes.navDisplayFlex}>
                    <IconButton edge="start" color ="inherit" aria-label="home">
                        <Home fontSize = "large" />
                        Medicaid
                    </IconButton>
                    <List 
                        component ="nav" 
                        aria-labelledby="main navigation"
                        className = {classes.navDisplayFlex}
                    >
                        {navLinks.map (({ title, path }) => (
                            <a href ={path} key ={title} className = {classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary = {title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Container>    
            </Toolbar>
        </AppBar>
    )
}

export default Header