import { Container, Stack } from "@mui/material";
import StackItem from "../components/StackItem";

export default function StackPage() {
  return (
    <Container>
      <h1 style={{ paddingBottom: "50px" }}>StackPage</h1>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2 }}>
        <StackItem>child</StackItem>
        <StackItem>
          flexbox gap is not fully supported in some browsers.
        </StackItem>
        <StackItem>set the useFlexGap prop to true</StackItem>
        <StackItem>
          Below is an interactive demo that lets you explore the visual results
          of the different settings:
        </StackItem>
        <StackItem>the Stack supports all system properties</StackItem>
      </Stack>
    </Container>
  );
}
