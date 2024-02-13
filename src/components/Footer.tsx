const footerStyle =  {
    display: 'flex',
    'flex-direction': 'column',
    marginTop: '2rem',
}

export const Footer = () => {
    return (
        <div style={footerStyle}>
            <a
               href="https://www.buymeacoffee.com/dekterev"
               target="_blank"
               rel="noreferrer"
            >
                Support us
            </a>
            <a
               href="mailto:frontenman@gmail.com"
               target="_blank"
               rel="noreferrer"
            >
                Feedback
            </a>
        </div>
    )
}
