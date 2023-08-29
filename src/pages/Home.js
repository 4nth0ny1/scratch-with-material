import { Box, Container } from "@mui/material/";

export default function Home() {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          height: "500px",
          background: {
            xs: "pink",
            sm: "lightgreen",
            md: "lightblue",
            lg: "blue",
          },
        }}
      ></Box>
    </Container>
  );
}
