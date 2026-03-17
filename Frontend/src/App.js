import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Sliding from "./Components/sliding";
import Category from "./Components/category";
import Footer from "./Components/Footer";
import FogApp from "./Pages/FogApp";
import About from "./Pages/About";
import LandslideApp from "./Pages/LandslideApp";
import DangerZoneApp from "./Pages/DangerZoneApp";
import FloodApp from "./Pages/FloodApp";
import SnowApp from "./Pages/SnowApp";
import GlobalViewApp from "./Pages/GlobalViewApp";
import Contact from "./Pages/contact";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Navbar />

        <main className="main-content">
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={
                <div>
                  <Sliding />
                  <Category />
              
                </div>
              }
            />

          
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/fog" element={<FogApp />} />
            <Route path="/landslide" element={<LandslideApp />} />
            <Route path="/danger-zone" element={<DangerZoneApp />} />
            <Route path="/flood" element={<FloodApp />} />
            <Route path="/snow-app" element={<SnowApp />} />
            <Route path="/global-view" element={<GlobalViewApp />} />
            

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;