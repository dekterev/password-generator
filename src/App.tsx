import { useEffect, useState } from "react";
import "./App.css";

interface HistoryItem {
    isShow: boolean
    pass: string
    date: string
    time: string
}

enum OptionKeys {
    NUMBERS = 'numbers',
    SYMBOLS = 'symbols',
    UPPERCASE = 'upperCase',
    LOWERCASE = 'lowerCase',
}

const RadioOptions = [
    {
        value: true,
        label: 'password'
    },
    {
        value: false,
        label: 'passphrase'
    }
]

const initialOptions = {
    [OptionKeys.NUMBERS]: {
        value: true,
        label: '0-9'
    },
    [OptionKeys.SYMBOLS]: {
        value: true,
        label: '!@#$%^&*('
    },
    [OptionKeys.UPPERCASE]: {
        value: true,
        label: 'A-Z'
    },
    [OptionKeys.LOWERCASE]: {
        value: true,
        label: 'a-z'
    },
};

interface Option {
    [key: string]: {
        value: boolean,
        label: string
    }
}

const Notification = {
    copy: 'Copied!',
    wrong: 'Some wrong happened',
}

const MINIMAL_LENGTH = 7

export default function App() {
    const [passwordLength, setPasswordLength] = useState(MINIMAL_LENGTH);
    const [password, setPassword] = useState("");
    const [options, setOptions] = useState<Option>(initialOptions);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [notification, setNotification] = useState('')

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10).toString();
    };

    const getSymbolFromUnicode = () => {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 33));
    };

    const getCharacterFromUnicode = () => {
        return String.fromCharCode(Math.random() * (122 - 97) + 97);
    };

    const getUpperCaseCharacterFromUnicode = () => {
        return getCharacterFromUnicode().toUpperCase();
    };

    const methods = [
        {
            value: getCharacterFromUnicode,
            active: options[OptionKeys.LOWERCASE].value
        },
        {
            value: getUpperCaseCharacterFromUnicode,
            active: options[OptionKeys.UPPERCASE].value
        },
        {
            value: getRandomNumber,
            active: options[OptionKeys.NUMBERS].value
        },
        {
            value: getSymbolFromUnicode,
            active: options[OptionKeys.SYMBOLS].value
        },
    ]

    const generatePassword = (passLength: number) => {
        let pass = "";
        const filteredMethods = methods.filter((method) => method.active);
        for (let i = 0; i < passLength; i++) {
            pass += filteredMethods[Math.floor(Math.random() * filteredMethods.length)]?.value();
        }
        setPassword(pass);
        setHistory((prev) => [
            ...prev,
            {
                isShow: false,
                pass,
                date: new Date().toDateString(),
                time: new Date().toLocaleTimeString(),
            },
        ]);
        return pass;
    };

    useEffect(() => {
        if (Object.values(options).every(({value}) => !value)){
            setOptions((prev => (
                {...prev,
                    [OptionKeys.LOWERCASE]: {
                    ...prev[OptionKeys.LOWERCASE],
                        value: true
                }})))
        }

        setPassword(generatePassword(passwordLength));
    }, [options]);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setNotification(Notification.copy);
        }catch (e) {
            setNotification(Notification.wrong)
        }finally {
            setTimeout(() => setNotification(''), 5000)
        }
    }

    return (
        <>
            <div className="App">
            <div className="password">
                <div className="password-text">{password}</div>
                <div className="password-copy" onClick={() => copyToClipboard(password)}>copy</div>
            </div>
            <h1>{passwordLength}</h1>
            <input
                type="range"
                min={7}
                max={128}
                onChange={(e) => {
                    generatePassword(Number(e.target.value));
                    setPasswordLength(Number(e.target.value));
                }}
                step={1}
            />
                <div className="options">
                <ul>
                    {Object.entries(options).map(([key, {label}]) => (
                        <li key={key}>
                            <input
                                type="checkbox"
                                name={key}
                                checked={options[key].value}
                                onChange={() => setOptions(prev => ({
                                    ...prev,
                                    [key]: {
                                        ...prev[key],
                                        value: !prev[key].value
                                    }
                                }))}
                            />
                            <label htmlFor={key}>{label}</label>
                        </li>
                    ))}
                </ul>
                <button onClick={() => generatePassword(passwordLength)}>
                    Generate
                </button>
            </div>
            <div className="history">
                <h2>Password history</h2>
                <ul>
                    {history.map(({ pass, date, time, isShow }) => (
                        <li key={pass}>
                            <span>{isShow ? pass : '**********'} [{date}, {time}]</span>
                            <button onClick={() => setHistory((prev => (
                                prev.map(el => ({
                                    ...el,
                                    isShow: el.pass === pass ? !el.isShow : el.isShow
                                })))))}>show</button>
                            <button onClick={() => copyToClipboard(pass)}>copy</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            {notification && <div className='notification'>{notification}</div>}
    </>
    );
}
