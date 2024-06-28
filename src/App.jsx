import "./App.css";
import Footer from "./components/footer";
import React from "react";

import Hero from "./components/hero";
import Course from "./components/course";
import CourseCreator from "./components/course-creator";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Hero />
      <Course />
      <CourseCreator />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;
