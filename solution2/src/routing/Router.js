import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import Councillors from "../pages/Councillors/Councillors";
import Affairs from "../pages/Affairs/Affairs";
import Councils from "../pages/Councils/Councils";

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Councillors />} />
      <Route path="/councils" element={<Councils />} />
      <Route path="/affairs" element={<Affairs />} />
      <Route path="/councillors" element={<Councillors />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
