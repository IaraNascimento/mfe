import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Toolbar sx={{ background: "#eee" }}>
        <Menu />
      </Toolbar>

      <Container sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}
