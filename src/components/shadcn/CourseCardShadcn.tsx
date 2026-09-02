import Link from "next/link";

import type { ReactCourse } from "@/data/react-courses";

import EnrollmentDialog from "./EnrollmentDialog";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

type CourseCardShadcnProps = {
    course: ReactCourse
}

export default function CourseCardShadcn({
    course
}: CourseCardShadcnProps) {
    return(
        <Card className="flex h-full flex-col">
            <CardHeader>
                <div className="mb-2">
                    <Badge variant="secondary">
                        {course.level}
                    </Badge>
                </div>

                <CardTitle>
                    {course.title}
                </CardTitle>

                <CardDescription>
                    {course.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
                <p className="text-3xl font-bold">
                    ${course.price}
                </p>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-3">
                <EnrollmentDialog
                    courseTitle={course.title}
                />

                <Button variant="outline">
                    <Link href={`/courses/${course.slug}`}>
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}