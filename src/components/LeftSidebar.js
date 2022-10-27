import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.module.css";

const LeftSidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://educine-server-tazbirristy.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h3 className="text-primary mb-3 mt-3">All Categories</h3>
      {courses.map((category) => (
        <p className="w-100 p-3 bg-primary rounded-2" key={category.id}>
          <Link
            className=" text-white text-decoration-none "
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
