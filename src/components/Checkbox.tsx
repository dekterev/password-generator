import { Dispatch, SetStateAction } from "react";
import { Option } from '../types.ts'

interface Props {
    option: {
        value: boolean,
        label: string
        key: string
    }
    setOptions: Dispatch<SetStateAction<Option>>
}

export const Checkbox = ({
    option: {value, label, key},
    setOptions
}: Props) => {
    return(
        <>
            <input
                type="checkbox"
                name={key}
                checked={value}
                onChange={() => setOptions((prev: Option) => ({
                    ...prev,
                    [key]: {
                        label,
                        value: !prev[key].value
                    }
                }))}
            />
            <label htmlFor={key}>{label}</label>
        </>
    )
}
