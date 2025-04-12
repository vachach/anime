import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:animeId" element={<Watch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;