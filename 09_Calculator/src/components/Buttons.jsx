import styles from "./Buttons.module.css"

let Buttons = ({buttonNames}) => {
    return (
        <>
            {buttonNames.map(buttons => <button className={styles.clacButton}>{buttons}</button>)}
        </>
    )
}

export default Buttons;