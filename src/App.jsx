import "./App.css";
import Access from "./components/Access";
import Community from "./components/Community";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-Gotham">
      <Navbar />
      <Home />
      <Access />
      <Community />
      <Features />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
