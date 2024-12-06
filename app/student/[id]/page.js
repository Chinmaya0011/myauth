"use client";

import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params; // Get the id directly from params
  const idAsNumber = Number(id); // Convert id to a number
  
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null); // Initialize with null, not undefined

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/students");
        const data = await response.json();
        setStudents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();
  }, []); // Fetch students only once on component mount

  useEffect(() => {
    if (students.length > 0) {
      const foundStudent = students.find((s) => s.id === idAsNumber); // Look for the student by id
      setStudent(foundStudent);
    }
  }, [students, idAsNumber]); // Re-run when students or id changes

  if (!student) {
    return <h1>Loading or No Student Found...</h1>; // Show a loading message or no student found
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Age: {student.age}</p>
    </div>
  );
};

export default Page;
