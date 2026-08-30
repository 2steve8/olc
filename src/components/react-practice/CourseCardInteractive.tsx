"use client";

import { useState } from "react";
import type { ReactCourses } from "@/data/react-courses";

type CourseCardInteractiveProps = {
  course: ReactCourses;
  buttonText?: string;
};

export default function CourseCardInteractive({
  course,
  buttonText = "Select Course",
}: CourseCardInteractiveProps) {
  const [isSelected, setIsSelected] = useState(false);

  function toggleCourse() {
    setIsSelected(!isSelected);
  }

  return (
    <article
      style={{
        border: isSelected
          ? "2px solid #2563eb"
          : "1px solid #ddd",
        borderRadius: "12px",
        padding: "24px",
        background: isSelected
          ? "#eff6ff"
          : "#ffffff",
      }}
    >
      <span
        style={{
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {course.level}
      </span>

      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <p>
        <strong>${course.price}</strong>
      </p>

      <button
        onClick={toggleCourse}
        style={{
          marginTop: "10px",
          padding: "10px 18px",
          cursor: "pointer",
        }}
      >
        {isSelected
          ? "Remove Selection"
          : buttonText}
      </button>

      {isSelected && (
        <p
          style={{
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          ✓ Course Selected
        </p>
      )}
    </article>
  );
}