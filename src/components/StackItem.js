import { Box } from "@mui/material";

export default function StackItem({ children }) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
      }}
    >
      {children}
    </Box>
  );
}
