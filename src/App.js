import "./App.css";

// import components
import Home from "./components/Home";
import Book from "./components/book-page/Book";
import { UriEncoder } from "./helper/UriEncoder";

// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":bookname/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
