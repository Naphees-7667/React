import styles from "./App.module.css"
import ButtonContainer from "./components/ButtonContainer"
import InputContainer from "./components/InputContainer"

function App() {
  return (
    <div className={styles.calculator}>
      <InputContainer />
      <ButtonContainer />
    </div>
  )
}

export default App
