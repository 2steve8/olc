"use client";

import { useState } from "react"

export default function StudentForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        setSubmitted(true)
    }

    function resetForm() {
        setName("")
        setEmail("")
        setSubmitted(false)
    }

    return(
        <section style={{
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            marginBottom: "30px"
        }}>
            <h2>3. Form & State</h2>

            <form onSubmit={handleSubmit}>
                <div style={{
                    marginBottom: "20px"
                }}>
                    <label
                    htmlFor="student-name"
                    style={{
                            display: "flex",
                            marginBottom: "8px"
                        }}
                    >
                        Name
                    </label>

                    <input
                    id="student-name"
                    type="text"
                    value={name}
                    onChange={(event) => 
                        setName(event.target.value)
                    }
                    placeholder="Enter your name"
                    style={{
                        width: "100%",
                        padding: "12px"
                    }}
                    />
                </div>

                <div style={{
                    marginBottom: "20px"
                }}>
                    <label
                    htmlFor="student-email"
                    style={{
                            display: "block",
                            marginBottom: "8px"
                        }}
                    >
                        Email
                    </label>

                    <input
                    id="student-email"
                    type="email"
                    value={email}
                    onChange={(event) => 
                        setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                    style={{
                        width: "100%",
                        padding: "12px"
                    }}
                    />
                </div>

                <div style={{
                    display: "flex",
                    marginBottom: "10px"
                }}>
                    <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer"
                    }}
                    >
                        Submit
                    </button>

                    <button
                    type="button"
                    onClick={resetForm}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer"
                    }}
                    >
                        Reset
                    </button>
                </div>
                
            </form>

            {submitted && (
                <div
                style={{
                    marginTop: "25px",
                    padding: "20px",
                    background: "#f3f4f6",
                    borderRadius: "10px"
                }}
                >
                    <h3>Submitted Information</h3>

                    <p>Name: <strong>{name}</strong></p>

                    <p>Email: <strong>{email}</strong></p>
                </div>
            )}
        </section>
    )
}