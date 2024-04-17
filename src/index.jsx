import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Post from "./Post";
import Archives from "./Archives";
import Features from "./Features";
import Page from "./Page";
import './index.css';
import Layouts from "./Layouts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/layouts" element={<Layouts />} />
          <Route path="/post" element={<Post />} />
          <Route path="/page" element={<Page />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/features" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);