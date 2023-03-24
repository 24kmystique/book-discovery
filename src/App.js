import "./App.css";

// import components
import Home from "./components/home-page/Home";
import Book from "./components/book-page/Book";
import { UriEncoder } from "./helper/UriEncoder";
import UserNavBar from "./components/user-nav-bar/UserNavBar";
import Header from "./components/header/Header";
import SecondaryHeader from "./components/secondary-header/SecondaryHeader";

// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./common.css";

function App() {

  return (
    <div>

      <BrowserRouter>
        <UserNavBar />
        <Header />
        <SecondaryHeader />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":bookname/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
