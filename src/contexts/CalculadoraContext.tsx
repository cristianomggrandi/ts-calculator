import React, { createContext, ReactNode, useState } from "react"

type CalculadoraContextType = {
    result: number,
    setResult: React.Dispatch<React.SetStateAction<number>>
}

const initialValue = {
    result: 0,
    setResult: {} as React.Dispatch<React.SetStateAction<number>>
}

const CalculatorContext = createContext<CalculadoraContextType>(initialValue)

export default CalculatorContext

type Props = {
    children: ReactNode
}

export function CalculatorContextProvider({ children }: Props) {
    const [result, setResult] = useState(initialValue.result)

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