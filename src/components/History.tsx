import { Dispatch, SetStateAction } from "react";
import { HistoryItem } from '../types.ts'
import {removeFromStorage} from "../utils";
import { HISTORY_KEY } from "../constants.ts";

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
                {history?.length && history?.map(({ pass, date, time, isShow }) => (
                    <li key={pass} className='history-item'>
                        <span>
                            {isShow
                                ? pass
                                : pass.replaceAll(/./g, '*')
                            }
                        </span>
                        <span className='history-item-date'>{date}, {time}</span>
                        <div className='history-item-buttons'>
                            <button onClick={() => setHistory((prev) => (prev.map(el => ({
                                ...el,
                                isShow: el.pass === pass ? !el.isShow : el.isShow
                            }))))}>
                                {isShow ? 'hide' : 'show'}
                            </button>
                            <button onClick={() => copyToClipboard(pass)}>copy</button>
                            <button onClick={() => setHistory((prev) => (
                                prev.filter(el => el.pass !== pass)))}>
                                delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='history-buttons'>
                {/*{history.length > 5*/}
                {/*?*/}
                {/*(*/}
                {/*    <button onClick={() => console.log(1)}>*/}
                {/*        show more ...*/}
                {/*    </button>*/}
                {/*) : null}*/}
                {history.length
                ?
                (
                    <button onClick={() => {
                        setHistory([])
                        removeFromStorage(HISTORY_KEY)
                    }}>
                        clear history
                    </button>
                ) : null}
            </div>
        </details>
    )
}
