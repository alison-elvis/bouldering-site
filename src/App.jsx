import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
      </Routes>
    </>
  );
};
export default App;