import { Container, Typography, Item } from "@mui/material";
import Grid from '@mui/material/Grid'; // Grid version 1


export const GameSummary = (props) => {
  return (
    <Grid container spacing={2}>

      {/* Header */}
      <Grid xs={12}>
        <Typography variant="h1">Game Results</Typography>
      </Grid>

      {/* Highest Scored Category */}
      <Grid xs={4}>
        <Typography variant="h6">Highest Scored Category</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Category Name</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Avg. Score</Typography>
      </Grid>

      {/* Lowest Scored Category */}
      <Grid xs={4}>
        <Typography variant="h6">Lowest Scored Category</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Category Name</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Avg. Score</Typography>
      </Grid>

      {/* Highest Scored Item */}
      <Grid xs={4}>
        <Typography variant="h6">Highest Scored Item</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Item Name</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Avg. Score</Typography>
      </Grid>

      {/* Lowest Scored Item */}
      <Grid xs={4}>
        <Typography variant="h6">Lowest Scored Item</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Item Name</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Avg. Score</Typography>
      </Grid>
    </Grid>
  );
};
