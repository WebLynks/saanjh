import { Outlet } from "react-router";
import "./App.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;