import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function TourCard() {
  return (
    // xs={3} means you can have 4 cards inside of your row. 12/3 = 4
    // xs={4} means you can have 3 cards instead
    <Grid item xs={3}>
      <Paper elevation={3}>Tour Card</Paper>
    </Grid>
  );
}
