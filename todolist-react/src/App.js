import "./styles.css";
import { Grocery } from "./components/Grocery";
export default function App() {
  return (
    <>
      <Grocery />
    </>
  );
}

//************************************************************ */
/*function Child1({sample,fun1}){

 
  

 
return(
<>

<button onClick={()=>fun1("hello")}>Click here</button>


</>
)

}


/* const [abc,setAbc]=useState("Masai");
  
  function Changeit(temp){

    setAbc(temp);

  }
  return (
    <div className="App">
      <h1>Parent</h1>
      <h2>{abc}</h2>
      <Child1 sample={abc} fun1={Changeit}/>
    </div>
  );*/
