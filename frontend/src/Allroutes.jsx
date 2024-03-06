import { Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Auth/Authentication";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/auth/login" element={<Authentication />} />
    </Routes>
  );
};

export default AllRoutes;
