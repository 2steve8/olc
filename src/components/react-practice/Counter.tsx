"use client";

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }

    function resetCount(){
        setCount(0)
    }

    return(
        <section style={{
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            marginBottom: "30px"
        }}>
            <h2>1. useState Counter</h2>

            <p>
                Current Count: <strong>{count}</strong>
            </p>

            <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap"
            }}>
                <button
                onClick={increaseCount}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
                >
                    Increase
                </button>
                <button
                onClick={decreaseCount}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
                >
                    Decrease
                </button>
                <button
                onClick={resetCount}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
                >
                    Reset
                </button>
            </div>
        </section>
    )
}