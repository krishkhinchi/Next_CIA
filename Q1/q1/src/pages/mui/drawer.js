import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function MuiDrawerPage() {
  return (
    <div>
      <h1>/mui/drawer</h1>
      <Drawer variant="permanent" anchor="left" open>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Drawer>
    </div>
  );
}
