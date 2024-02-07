import { useState } from "preact/hooks"

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <span class="text-yellow-300 text-xl mr-4">transition:persist {counter} </span>
            <button class="border px-4 py2 text-xl text-white" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border px-4 py2 text-xl text-white"onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )
}