'use client'

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  //     setIsDarkMode(true)
  //   } else {
  //     setIsDarkMode(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isDarkMode){
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "";
  //   }
  // }, [isDarkMode])


  const [isDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);
  
  return (
    <div>
      
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />

    </div>
  );
}
