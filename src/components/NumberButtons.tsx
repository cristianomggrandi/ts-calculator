import React, { ReactElement, memo } from "react"

const NumberButtons: React.FC<{ keySymbol: string, key: number, handleClick: (keySymbol: string) => void }> = ({ keySymbol, key, handleClick }): ReactElement => {
    return (
        <button className='keyboard-key' key={key} onClick={() => handleClick(keySymbol)}>
            {keySymbol}
        </button>
    )
}

export default memo(NumberButtons)