import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Event from "./pages/Event.tsx";
import Blog from "./pages/Blog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="events" element={<Event />} />
          <Route path="blogs" element={<Blog />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
