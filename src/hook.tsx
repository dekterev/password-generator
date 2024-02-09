import { useEffect, useState } from "react";
import {
    MINIMAL_LENGTH,
    INITIAL_OPTIONS,
    NOTIFICATION,
} from './constants.ts'
import {Option, OptionKeys, HistoryItem} from './types.ts'
import {
    getCharacterFromUnicode,
    getRandomNumber,
    getSymbolFromUnicode,
    getUpperCaseCharacterFromUnicode
} from "./utils.ts";

export const usePassword = () => {
    const [passwordLength, setPasswordLength] = useState(MINIMAL_LENGTH);
    const [password, setPassword] = useState("");
    const [options, setOptions] = useState<Option>(INITIAL_OPTIONS);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [notification, setNotification] = useState('')

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

        return () => {
            setPassword("");
        }
    }, [options]);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setNotification(NOTIFICATION.copy);
        }catch (e) {
            setNotification(NOTIFICATION.wrong)
        }finally {
            setTimeout(() => setNotification(''), 5000)
        }
    }

    return {
        passwordLength,
        setPasswordLength,
        password,
        setPassword,
        options,
        setOptions,
        history,
        setHistory,
        notification,
        setNotification,
        generatePassword,
        copyToClipboard
    }
}
