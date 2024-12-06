"use client"

import React, { useEffect, useState } from 'react'

const page = ({params}) => {
const {id}=React.use(params);
const idAsNumber=Number(id);

const[students,setStudents]=useState([]);
const[student,setStudent]=useState();

useEffect(()=>{
  const fetchStudent=async()=>{
    try{
      const response=await fetch("http://localhost:3000/api/students");
      const data=await response.json();
      setStudents(data);
      console.log(data)
    }
    catch(err){
      console.log(err);
    }
  }
  fetchStudent();
},[])

useEffect(()=>{
  if(students.length>0){
    const findStudent=students.find((student)=>student.id===idAsNumber);
    setStudent(findStudent);
  }
},[students,idAsNumber])


if(!student){
  return(
    <h1>Please Wait...</h1>
  )
}





  return (
    <div key={student.id}>
      <h1>{student.name}</h1>
      <p>{student.age}</p>
    </div>
  )
}

export default page