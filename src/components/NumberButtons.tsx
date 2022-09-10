import React, { ReactElement, memo } from "react"

const NumberButtons: React.FC<{ number: number, handleClick: (number: number) => void }> = ({ number, handleClick }): ReactElement => {
    return (
        <button className='keyboard-key' key={number} onClick={() => handleClick(number)}>
            {number}
        </button>
    )
}

export default memo(NumberButtons)