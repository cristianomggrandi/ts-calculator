import React, { createContext, ReactNode, useEffect, useState } from "react"

type CalculadoraContextType = {
    result: number,
    setResult: React.Dispatch<React.SetStateAction<number>>,
    current: number | undefined,
    setCurrent: React.Dispatch<React.SetStateAction<number | undefined>>,
    operator: string | undefined,
    setOperator: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const initialValue = {
    result: 0,
    setResult: {} as React.Dispatch<React.SetStateAction<number>>,
    current: undefined,
    setCurrent: {} as React.Dispatch<React.SetStateAction<number | undefined>>,
    operator: undefined,
    setOperator: {} as React.Dispatch<React.SetStateAction<string | undefined>>,
}

const CalculatorContext = createContext<CalculadoraContextType>(initialValue)

export default CalculatorContext

type Props = {
    children: ReactNode
}

export function CalculatorContextProvider({ children }: Props) {
    const [result, setResult] = useState(initialValue.result)
    const [current, setCurrent] = useState<number | undefined>(initialValue.current)
    const [operator, setOperator] = useState<string | undefined>(initialValue.operator)

    useEffect(() => console.log(value))

    const value = {
        result,
        setResult,
        current,
        setCurrent,
        operator,
        setOperator,
    }

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )
}