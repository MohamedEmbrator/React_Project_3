import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from "@mui/material";
import {
  Home,
  Create,
  Person2,
  Settings,
  Logout,
  LightMode,
  DarkMode
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const MUIDrawer = ({
  drawerWidth,
  setColorMode,
  drawerDisplay,
  drawerType,
  setDrawerDisplay,
  setDrawerType
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { xs: drawerDisplay, sm: "block", md: "block" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        setDrawerType("permanent");
        setDrawerDisplay("none");
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "Center" }}
        >
          <IconButton
            onClick={() => {
              window.localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setColorMode(theme.palette.mode === "dark" ? "light" : "dark");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <LightMode sx={{ color: "gold" }} />
            ) : (
              <DarkMode />
            )}
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/create")}>
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Seetings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default MUIDrawer;
