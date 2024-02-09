import { Dispatch, SetStateAction } from "react";
import { HistoryItem } from '../types.ts'
import { HIDE_PASS } from "../constants.ts";

interface Props {
    history: HistoryItem[]
    copyToClipboard: (text: string) => void
    setHistory: Dispatch<SetStateAction<HistoryItem[]>>
}

export const History = ({
    history,
    copyToClipboard,
    setHistory,
}: Props) => {
    return (
        <details className="history">
            <summary>Password history</summary>
            <ul>
                {history.map(({ pass, date, time, isShow }) => (
                    <li key={pass}>
                        <span>{isShow ? pass : HIDE_PASS}</span>
                        <span className='history-date'>{date}, {time}</span>
                        <div className='history-buttons'>
                            <button onClick={() => setHistory((prev) => (prev.map(el => ({
                                ...el,
                                isShow: el.pass === pass ? !el.isShow : el.isShow
                            }))))}>
                                {isShow ? 'hide' : 'show'}
                            </button>
                            <button onClick={() => copyToClipboard(pass)}>copy</button>
                        </div>
                    </li>
                ))}
            </ul>
        </details>
    )
}
