import { Container, Paper } from "@mui/material";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Paper elevation={1}>
      <Container
        sx={{
          minHeight: "100vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          direction: "column",
          gap: "10px",
          position: "relative",
        }}
      >
        <Outlet />
      </Container>
    </Paper>
  );
};
