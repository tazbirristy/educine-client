import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <p key={category.id}>
          <Link>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
