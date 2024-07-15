import styles from "./ButtonContainer.module.css"
import Buttons from "./Buttons";

const ButtonContainer = () => {

    const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','00','.'];

    return (
        <div className={styles.buttonContainer}>
            <Buttons buttonNames = {buttonNames} />
        </div>
    )

}

export default ButtonContainer;