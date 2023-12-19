import React, { createContext, ReactNode, useEffect, useState } from "react"

type CalculadoraContextType = {
    result: string
    setResult: React.Dispatch<React.SetStateAction<string>>
    current: string | undefined
    setCurrent: React.Dispatch<React.SetStateAction<string>>
    operator: string | undefined
    setOperator: React.Dispatch<React.SetStateAction<string | undefined>>
}

const initialValue = {
    result: "",
    setResult: {} as React.Dispatch<React.SetStateAction<string>>,
    current: "",
    setCurrent: {} as React.Dispatch<React.SetStateAction<string>>,
    operator: undefined,
    setOperator: {} as React.Dispatch<React.SetStateAction<string | undefined>>,
}

const CalculatorContext = createContext<CalculadoraContextType>(initialValue)

export default CalculatorContext

type Props = {
    children: ReactNode
}

export function CalculatorContextProvider(props: Props) {
    const [result, setResult] = useState("")
    const [current, setCurrent] = useState("")
    const [operator, setOperator] = useState<string | undefined>()

    useEffect(() => console.log(value))

    const value = {
        result,
        setResult,
        current,
        setCurrent,
        operator,
        setOperator,
    }

    return <CalculatorContext.Provider value={value}>{props.children}</CalculatorContext.Provider>
}
