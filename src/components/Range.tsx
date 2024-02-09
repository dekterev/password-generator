import { Dispatch, SetStateAction } from "react";
import { MINIMAL_LENGTH } from '../constants.ts'

interface Props {
    passwordLength: number
    setPasswordLength: Dispatch<SetStateAction<number>>
    generatePassword: (passwordLength: number) => string
}

export const Range = ({
    passwordLength,
    setPasswordLength,
    generatePassword
}: Props) => {
    return (
        <input
            name='passwordLength'
            type="range"
            min={MINIMAL_LENGTH}
            value={passwordLength}
            max={128}
            onMouseUp={(e) => {
                generatePassword(Number(e.currentTarget.value));
            }}
            onTouchEnd={(e) => {
                generatePassword(Number(e.currentTarget.value));
            }}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            step={1}
        />
    )
}
