import "./App.css";

// import components
import Home from "./components/Home";
import Book from "./components/book-page/Book";
import { UriEncoder } from "./helper/UriEncoder";
import UserNavBar from "./components/user-nav-bar/UserNavBar";
import Header from "./components/header/Header";
import SecondaryHeader from "./components/secondary-header/SecondaryHeader";
import SideBar from "./components/side-bar/SideBar";

// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  return (
    <div>

      <BrowserRouter>
        <UserNavBar />
        <Header />
        <SecondaryHeader />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":bookname/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
