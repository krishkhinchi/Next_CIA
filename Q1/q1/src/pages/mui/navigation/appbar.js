import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MuiAppBarPage() {
  return (
    <div>
      <h1>/mui/navigation/appbar</h1>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI AppBar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
