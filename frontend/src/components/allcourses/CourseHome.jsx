import React from "react";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  return (
    <>
      <Header />
      <Back title="Explore Courses" />
      <CoursesCard />
      <Footer />
    </>
  );
};

export default CourseHome;
