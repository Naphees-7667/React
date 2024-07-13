import './App.css'

function App() {

  let items = ['Dal','Salad','Chawal','Roti','Green Vegetables','Paneer']

  return (
    <>
    <h1>Healthy Food Items</h1>
      <ul class="list-group">
        {items.map(item => <li class="list-group-item" key={item}>{item}</li>)}
    </ul>
    </>
  )
}
export default App