export enum OptionKeys {
    NUMBERS = 'numbers',
    SYMBOLS = 'symbols',
    UPPERCASE = 'upperCase',
    LOWERCASE = 'lowerCase',
}

export interface Option {
    [key: string]: {
        value: boolean,
        label: string
    }
}

export interface HistoryItem {
    isShow: boolean
    pass: string
    date: string
    time: string
}
