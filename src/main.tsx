import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/HomePage.tsx";
import Event from "./pages/EventPage.tsx";
import Blog from "./pages/BlogPage.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="events" element={<Event />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="about-us" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  </StrictMode>,
);
