import AllRoutes from "./Allroutes";
import "./App.css";
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
      </Router>
    </>
  );
}

export default App;
