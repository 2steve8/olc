"use client"

import type { FormEvent } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "@/components/ui/button"

type EnrollmentDialogProps = {
    courseTitle: string
}

export default function EnrollmentDialog({
    courseTitle
}: EnrollmentDialogProps) {
    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        alert(`Enrollment form submitted for ${courseTitle}`)
    }

    return(
        <Dialog>
            <DialogTrigger>
                <Button>
                    Enroll Now
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Enroll in Course
                    </DialogTitle>

                    <DialogDescription>
                        Enter your information to ernoll in{" "}
                        <strong>{courseTitle}</strong>
                    </DialogDescription>
                </DialogHeader>

                <form 
                onSubmit={handleSubmit}
                className="space-y-5"
                >
                    <Label htmlFor="student-name">
                        Name
                    </Label>
                    <Input
                    id="student-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    />

                    <div className="space-y-2">
                        <Label
                        htmlFor="student-email"
                        >
                            Email
                        </Label>
                        <Input
                        id="student-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        />
                        
                        <DialogFooter>
                            <Button type="submit">
                                Confirm Enrollment
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}