 
import Counter from "./MainArea/Mainarea"


function App() {

  return (
    <>
    <div className="border border-dark border-2 m-2">
      <h1>Props Counter</h1>
      <Counter step={10}>100</Counter>
      <Counter step={5}>200</Counter>
    </div>
    </>
  )
}

export default App
