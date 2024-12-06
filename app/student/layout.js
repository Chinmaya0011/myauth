export const metadata = {
    title: "Students List | My Application",
    description: "A list of all students fetched from the server.",
    keywords: ["students", "list", "students data", "API"],
    openGraph: {
      title: "Students List | My Application",
      description: "View a list of students fetched from the backend API.",
      image: "/images/student-image.jpg",
      url: "https://myauth-orpin.vercel.app/student",
    },
    twitter: {
      card: "summary_large_image",
      title: "Students List | My Application",
      description: "A list of all students available for viewing.",
      image: "/images/student-image.jpg",
    },
  };
  
  export default function StudentLayout({ children }) {
    return <>{children}</>;
  }
  