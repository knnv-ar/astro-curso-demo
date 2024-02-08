import { useState } from "preact/hooks"

export function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div class="flex justify-center items-center">
                <span class="text-yellow-300 text-l mr-4">transition:persist {counter} </span>
                <button class="border px-4 py2 text-l text-white" onClick={() => setCounter(counter => counter + 1)}>+</button>
                <button class="border px-4 py2 text-l text-white"onClick={() => setCounter(counter => counter - 1)}>-</button>
            </div>
        </>
    )
}