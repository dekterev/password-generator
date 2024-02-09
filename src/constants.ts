import { OptionKeys } from "./types.ts";

export const MINIMAL_LENGTH = 7

export const INITIAL_OPTIONS = {
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

export const NOTIFICATION = {
    copy: 'Copied!',
    wrong: 'Some wrong happened',
}
