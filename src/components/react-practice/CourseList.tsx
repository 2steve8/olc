import CourseCardInteractive from "./CourseCardInteractive";
import { reactCourses } from "@/data/react-courses";

export default function CourseList() {
  return (
    <section
      style={{
        marginBottom: "40px",
      }}
    >
      <h2>2. Components, Props & Lists</h2>

      <p>
        These course cards are generated using .map().
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {reactCourses.map((course) => (
          <CourseCardInteractive
            key={course.id}
            course={course}
            buttonText="Enroll Now"
          />
        ))}
      </div>
    </section>
  );
}