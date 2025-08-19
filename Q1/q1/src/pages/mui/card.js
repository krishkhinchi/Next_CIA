import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MuiCardPage() {
  return (
    <div>
      <h1>/mui/card</h1>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5">MUI Card</Typography>
          <Typography>This is a Material UI Card component.</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
