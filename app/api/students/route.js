export async function GET(request) {
    const students = [
        {
          id: 1,
          name: "Chinmaya",
          age: 20,
          grade: "A",
          subjects: ["Mathematics", "Science", "Computer Science"],
        },
        {
          id: 2,
          name: "Ananya",
          age: 22,
          grade: "B",
          subjects: ["English", "History", "Sociology"],
        },
        {
          id: 3,
          name: "Ravi",
          age: 21,
          grade: "A",
          subjects: ["Physics", "Chemistry", "Mathematics"],
        },
        {
          id: 4,
          name: "Priya",
          age: 19,
          grade: "C",
          subjects: ["Biology", "Geography", "Art"],
        },
        {
          id: 5,
          name: "Aarav",
          age: 23,
          grade: "B",
          subjects: ["Philosophy", "Economics", "Political Science"],
        },
      ];
      
    return new Response(JSON.stringify(students),{
        status:200,
        headers:{"Content-Type":"application/json"}
    })
}