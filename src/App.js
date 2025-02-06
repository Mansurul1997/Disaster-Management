import Donation from "./pages/donation/Donation";
import { Route, Routes } from "react-router";
import Crisis from "./pages/crisis/Crisis";
import Volunteer from "./pages/volunteer/Volunteer";
import Dashboard from "./pages/dashboard/Dashboard";
import Topbar from "./components/topber/Topbar";
import LoginPopup from "./components/loginPopup/LoginPopup";
import Home from "./components/home/Home";
import Footer from "./components/home/footer/Footer";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crisis" element={<Crisis />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loginPopup" element={<LoginPopup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
