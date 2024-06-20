import "./App.css";
import Card from "./components/card";


function App() {
  let objArr = {
    name:"Red Cheif",
    uid:14410
  }
  let arr = ["Ironman","Spiderman"]
  return (
    <>
      <Card username = {arr} review={14} />

      {/*  Props - Passing of arr and object  otherwise normal text is passed as name  = "Shoes" */}

      <Card username = {objArr} review={24} />
    </>
  )
}

export default App;