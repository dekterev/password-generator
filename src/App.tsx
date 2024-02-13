import "./App.css";
import {
    Range,
    History,
    Checkbox,
} from "./components";
import { usePassword } from "./hooks";
import {Footer} from "./components/Footer.tsx";

export default function App() {
    const {
        passwordLength,
        setPasswordLength,
        password,
        options,
        setOptions,
        history,
        setHistory,
        notification,
        generatePassword,
        copyToClipboard
    } = usePassword();

    return (
        <>
            <div className="App">
                <div className="password">
                    <div className="password-text">{password}</div>
                    <div className="password-copy" onClick={() => copyToClipboard(password)}>copy</div>
                </div>
                <div className="options">
                    <div className='options-password-length'>
                        <div>
                            <span>Password length</span>
                            <span>{passwordLength}</span>
                        </div>
                        <Range
                        passwordLength={passwordLength}
                        setPasswordLength={setPasswordLength}
                        generatePassword={generatePassword}
                    />
                    </div>
                    <ul>
                        {Object.entries(options).map(([key, opt]) => (
                            <li key={key}>
                                <Checkbox
                                    option={{...opt, key }}
                                    setOptions={setOptions}
                                />
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => generatePassword(passwordLength)}>
                        Generate
                    </button>
                </div>
                <History
                    history={history}
                    copyToClipboard={copyToClipboard}
                    setHistory={setHistory}
                />
            </div>
            {notification && <div className='notification'>{notification}</div>}
            <Footer />
        </>
    );
}
