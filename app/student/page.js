"use client";
import { useState, useEffect } from "react";

const Page = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("http://localhost:3000/api/students");
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
