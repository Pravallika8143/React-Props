 
import Counter from "./MainArea/Mainarea"


function App() {

  return (
    <>
    <div className="border border-success border-5 m-2">
      <h1>Props Counter</h1>
      <Counter step={10}>100</Counter>
      <Counter step={5}>200</Counter>
    </div>
    </>
  )
}

export default App
