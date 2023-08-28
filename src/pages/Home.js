import { Box } from "@mui/material/";

export default function Home() {
  return (
    <Box
      sx={{
        width: "500px",
        height: "500px",
        background: {
          xs: "pink",
          sm: "lightgreen",
          md: "lightblue",
          lg: "blue",
        },
      }}
    >
      Home Page
    </Box>
  );
}
