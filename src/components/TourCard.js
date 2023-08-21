import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function TourCard() {
  return (
    // xs={3} means you can have 4 cards inside of your row. 12/3 = 4
    // xs={4} means you can have 3 cards instead

    // in typography, component is the kind of header it will be, and variant is the size.
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="niagara.jpg"
        />

        <Typography component="h2" variant="subtitle2">
          Immerse Into The Falls
        </Typography>
      </Paper>
    </Grid>
  );
}
