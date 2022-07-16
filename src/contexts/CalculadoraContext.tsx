import React, { createContext, useState } from "react"

const CalculatorContext = createContext(
    {
        result: 0,
    }
)

export default CalculatorContext

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function CalculatorContextProvider({ children }: Props) {
    const [result, setResult] = useState(0)

    const value = {
        result,
        setResult
    }

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )
}