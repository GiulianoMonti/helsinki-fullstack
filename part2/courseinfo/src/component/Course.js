import React from "react";
import Header from "./Header";
import Names from "./Names";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course} />
      <Names course={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
};

export default Course;
