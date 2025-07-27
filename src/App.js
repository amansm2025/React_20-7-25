
import { useState} from "react";
import Counter from "./Component/count";
import Count from "./Component/coun2";
function App( ) {
const [fruit, setFruit]=useState("Apple") ;
const handleFruit=()=>{
setFruit("Banana")
}

return (
<div>
<h1>State in React Js</h1>
<h1>{fruit}</h1>
<button onClick={handleFruit} >Change Fruit Name 1</button>
<Counter />
<Count/>
{/* <button onClick={handleFruit2} >Change Fruit Name 2</button> */}
</div>
);
}


export default App