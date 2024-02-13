const setChromeStorage = async (key: string, value: unknown) => {
    await chrome.storage?.local.set({ [key]: value })
}

export const getChromeStorage = async (key: string) => {
    const result = await chrome.storage.local.get([key])

    return result[key]
}

const setLocalStorage =  (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage =  (key: string) => JSON.parse(localStorage.getItem(key) || '{}')

export const saveToStorage = async (key: string, value: unknown) => {
    const isChromeApi = !!chrome.storage

    if (isChromeApi){
        await setChromeStorage(key, value)
    } else {
        setLocalStorage(key, value)
    }
}

export const getFromStorage = async (key: string) => {
    const isChromeApi = !!chrome.storage

    if (isChromeApi){
        return await getChromeStorage(key)
    }

    return getLocalStorage(key)
}

export const removeFromStorage = (key: string) => {
    const isChromeApi = !!chrome.storage

    if (isChromeApi){
        chrome.storage.local.remove(key)
    } else {
        localStorage.removeItem(key)
    }
}
