import React from "react";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { Divider, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    height: '100%',
    boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.15)',
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.15)',
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `0`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: "#F5C332",
    boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.15)',
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Layout = ({ children }) => {
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Profile ===== 
    const profileOpen = Boolean(anchorEl);
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('sbLoginStatus');
        navigate('/auth');
    }

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar open={open}>
                <Toolbar>
                    {open ? (
                        <IconButton
                            color="inherit"
                            onClick={handleDrawerClose}
                            sx={{ marginRight: 'auto' }}
                            edge="start">
                            <ArrowBackIosIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ marginRight: 'auto' }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleProfileClick}
                                sx={{ ml: 2 }}
                                aria-controls={profileOpen ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={profileOpen ? 'true' : undefined}>
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <img width='30px' height='30px' src="/assets/img/faces/1.jpg" alt="profile" />
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={profileOpen}
                            onClose={handleProfileClose}
                            onClick={handleProfileClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem onClick={handleProfileClose}>
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <img width='30px' height='30px' src="/assets/img/faces/1.jpg" alt="Profile" />
                                </Avatar> Profile</MenuItem>
                            <MenuItem onClick={handleProfileClose}>
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <img width='30px' height='30px' src="/assets/img/faces/1.jpg" alt="Profile" />
                                </Avatar> My account</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleProfileClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleProfileClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader style={{ backgroundColor: '#ebebeb' }} className="justify-content-center">
                    <img className="admin-logo" src="/assets/img/ui/logo.svg" alt="Starbelly" />
                </DrawerHeader>
                <Divider />
                <List className="menu_list">
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/admin/dashboard'} >
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText className="list_text" primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/admin/product'}>
                            <ListItemIcon><MenuBookIcon /></ListItemIcon>
                            <ListItemText className="list_text" primary="Products" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;