"use client";

import { useState } from "react";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  useForm,
} from "react-hook-form";

import {
  courseFormSchema,
  type CourseFormValues,
} from "@/lib/validations/course";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type CreatedCourse =
  CourseFormValues & {
    id: number;
    slug: string;
    createdAt: string;
  };

type ApiResponse = {
  success: boolean;
  message: string;
  data?: CreatedCourse;
  errors?: Record<
    string,
    string[] | undefined
  >;
};

export default function CreateCourseForm() {
  const [submittedCourse, setSubmittedCourse] = useState<CreatedCourse | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<CourseFormValues>({
    resolver:
      zodResolver(
        courseFormSchema
      ),

    defaultValues: {
      title: "",
      description: "",
      price: 0,
      level: "Beginner",
      published: false,
    },
  });

  async function onSubmit(
    data: CourseFormValues
  ) {
    setApiMessage(null);
    setApiError(null);

    try {
      const response =
        await fetch("/api/courses",{
            method: "POST",

            headers: {
                "Content-Type":
                "application/json",
            },

            body: JSON.stringify(data),
          }
        );

      const result: ApiResponse =
        await response.json();

      if (!response.ok) {
        setApiError(result.message || "Failed to create course.");

        return;
      }

      if (!result.data) {
        setApiError("The server did not return the created course.");

        return;
      }

      setSubmittedCourse(
        result.data
      );

      setApiMessage(
        result.message
      );

      reset();
    } catch (error) {
      console.error("Course submission error:", error);

      setApiError("Unable to connect to the server.");
    }
  }

  function handleReset() {
    reset();

    setSubmittedCourse(null);
    setApiMessage(null);
    setApiError(null);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>
            Create Course
          </CardTitle>

          <CardDescription>
            This form now sends data to the Next.js backend.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={
              handleSubmit(onSubmit)
            }
            className="space-y-6"
            noValidate
          >
            {/* TITLE */}

            <div className="space-y-2">
              <Label htmlFor="title">
                Course Title
              </Label>

              <Input
                id="title"
                placeholder="Next.js Full-Stack Development"
                aria-invalid={errors.title ? "true" : "false"}
                {...register("title")}
              />

              {errors.title && (
                <p className="text-sm font-medium text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}

            <div className="space-y-2">
              <Label htmlFor="description">
                Description
              </Label>

              <Textarea
                id="description"
                rows={6}
                placeholder="Describe what students will learn..."
                aria-invalid={errors.description ? "true" : "false"}
                {...register("description")}
              />

              {errors.description && (
                <p className="text-sm font-medium text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* PRICE */}

            <div className="space-y-2">
              <Label htmlFor="price">
                Price
              </Label>

              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                aria-invalid={errors.price ? "true" : "false"}
                {...register("price", {
                    valueAsNumber:
                      true,
                  }
                )}
              />

              {errors.price && (
                <p className="text-sm font-medium text-destructive">
                  { errors.price.message }
                </p>
              )}
            </div>

            {/* LEVEL */}

            <div className="space-y-2">
              <Label htmlFor="level">
                Course Level
              </Label>

              <select
                id="level"
                className="border-input bg-background h-10 w-full rounded-md border px-3 text-sm"
                { ...register("level") }
              >
                <option value="Beginner">
                  Beginner
                </option>

                <option value="Intermediate">
                  Intermediate
                </option>

                <option value="Advanced">
                  Advanced
                </option>
              </select>

              {errors.level && (
                <p className="text-sm font-medium text-destructive">
                  { errors.level.message }
                </p>
              )}
            </div>

            {/* PUBLISHED */}

            <div className="flex items-start gap-3 rounded-lg border p-4">
              <input
                id="published"
                type="checkbox"
                className="mt-1 h-4 w-4"
                { ...register("published") }
              />

              <div>
                <Label htmlFor="published">
                  Publish Course
                </Label>

                <p className="mt-1 text-sm text-muted-foreground">
                  Make this course visible to students.
                </p>
              </div>
            </div>

            {/* API MESSAGE */}

            {apiMessage && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                {apiMessage}
              </div>
            )}

            {apiError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {apiError}
              </div>
            )}

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                { isSubmitting ? "Creating..." : "Create Course"}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* SERVER RESPONSE */}

      <Card>
        <CardHeader>
          <CardTitle>
            Server Response
          </CardTitle>

          <CardDescription>
            Data returned from POST /api/courses.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submittedCourse ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm text-muted-foreground">
                  ID
                </p>

                <p className="font-semibold">
                  {submittedCourse.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Title
                </p>

                <p className="font-semibold">
                  {submittedCourse.title}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Slug
                </p>

                <p className="font-semibold">
                  {submittedCourse.slug}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Price
                </p>

                <p className="font-semibold">
                  {submittedCourse.price === 0 ? "Free" : `$${submittedCourse.price}`}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Level
                </p>

                <p className="font-semibold">
                  {submittedCourse.level}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Published
                </p>

                <p className="font-semibold">
                  {submittedCourse.published ? "Yes" : "No"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-muted-foreground">
                  JSON returned by API
                </p>

                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  {JSON.stringify(submittedCourse, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Create a course to see the backend response.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}