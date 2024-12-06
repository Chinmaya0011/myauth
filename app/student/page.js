"use client";  // This line is needed in Next.js 13+ to indicate it's a client-side component

import { useState, useEffect } from "react";

const Page = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle any errors during fetching

  // Fetching student data when the component is mounted
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);  // Stop loading once the fetch is done
      }
    };

    fetchStudents();
  }, []);  // Empty dependency array makes this effect run only once when the component mounts

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Student List</h1>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Subjects: {student.subjects.join(", ")}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
