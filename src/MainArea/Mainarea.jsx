import React from "react"

// function Counter(props){
//     var [count,setCount]=React.useState(+props.children)

//     function inc(){
//         // setCount(count,x.step)
//         setCount((currentval)=>{
//             return currentval+props.step
//         })
//     }

//     function dec(){
//         setCount(count-props.step)
//     }

//     return(
//         <div className="border border-info border-5 p-2 m-4">
//             <h1>Counter:{count}</h1>
//             <button  className="boder border-success me-4" style={{backgroundColor:"green",color:"white"}} onClick={()=>{inc()}}>Increament</button>
//             <button  className="boder border-danger"  style={{backgroundColor:"red",color:"white"}} onClick={()=>{dec()}}>Decreament</button>
//         </div>
//     )
// }
// export default Counter



// By Destructuring
function Counter({step,children}){
    var [count,setCount]=React.useState(+children)

    function inc(){
        setCount((currentval)=>{
            return currentval+step
        })
    }

    function dec(){
        setCount(count-step)
    }

    return(
        <div className="border border-info border-3 p-2 m-4">
            <h1>Counter:{count}</h1>
            <button  className="btn btn-success me-4" style={{color:"white"}} onClick={()=>{inc()}}>Increament</button>
            <button  className="btn btn-danger"  style={{color:"white"}} onClick={()=>{dec()}}>Decreament</button>
        </div>
    )
}
export default Counter