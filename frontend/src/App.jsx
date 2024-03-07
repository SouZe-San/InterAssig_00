import AllRoutes from "./Allroutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navigationBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header className="w-screen">
          <NavBar />
        </header>
        <main>
          <AllRoutes />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
