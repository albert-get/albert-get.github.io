import React, {FC, ReactNode, useEffect, useState} from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Global} from '@emotion/react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import {useTheme, createTheme, ThemeProvider} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import routes from '../config/routes'
import { navigate } from 'gatsby';

type Props = {
    children: ReactNode,
    location?:{pathname:string}
}
const customT = createTheme({
    palette: {
        primary: {
            main: red[400],
        },
        secondary: {
            main: red[400],
        },
        error: {
            main: red.A400,
        },
    },
});
const Layout: FC<Props> = (props) => {
    let [selected,setSelected]=useState('')
    let [drawerV, setDrawerV] = useState(false)
    const theme = useTheme();
    let [widthEnough, setWidthEnough] = useState(true);
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    useEffect(() => {
        if (matches) {
            setWidthEnough(true)
        } else {
            setWidthEnough(false)
        }
        if(props.location){
            setSelected(props.location.pathname)
        }
    })
    function itemClick(item:{path:string}){
        navigate(item.path)
        setSelected(item.path)
    }

    if (widthEnough) {
        return (
            <ThemeProvider theme={customT}>
                <Box>
                    <Global
                        styles={{
                            body: {
                                margin: 0,
                                padding: 0
                            }
                        }}
                    />
                    <AppBar position="sticky">
                        <Container maxWidth={false}>
                            <Toolbar disableGutters>
                                <Box sx={{flexGrow: 1}}/>
                                <Typography variant="h6" component="div">
                                    BLOG
                                </Typography>
                            </Toolbar>
                        </Container>
                    </AppBar>
                    <Stack direction="row">
                        <Box sx={{width: '300px'}}>
                            <MenuList>
                                {routes.map((item)=>{
                                    return (
                                        <MenuItem key={item.path} onClick={()=>itemClick(item)} selected={selected===item.path}>
                                            <ListItemText>
                                                {item.name}
                                            </ListItemText>
                                        </MenuItem>
                                    )
                                })}
                            </MenuList>
                        </Box>
                        <Box sx={{flexGrow:1}}>{props.children}</Box>
                    </Stack>
                </Box>
            </ThemeProvider>
        )

    }
    return (
        <ThemeProvider theme={customT}>
            <Box>
                <Global
                    styles={{
                        body: {
                            margin: 0,
                            padding: 0
                        }
                    }}
                />
                <AppBar position="sticky">
                    <Container maxWidth={false}>
                        <Toolbar disableGutters>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setDrawerV(!drawerV)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Box sx={{flexGrow: 1}}/>
                            <Typography variant="h6" component="div">
                                BLOG
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Box>{props.children}</Box>
                <Drawer
                    anchor='left'
                    open={drawerV}
                    onClose={() => setDrawerV(false)}
                >
                    <Box sx={{width: '60vw'}}>
                        <MenuList>
                        {routes.map((item)=>{
                            return (
                                <MenuItem key={item.path} onClick={()=>itemClick(item)} selected={selected===item.path}>
                                    <ListItemText>
                                        {item.name}
                                    </ListItemText>
                                </MenuItem>
                            )
                        })}
                        </MenuList>
                    </Box>
                </Drawer>
            </Box>
        </ThemeProvider>
    )
}

export default Layout