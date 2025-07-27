import { useState } from "react";
const Count= ()=>{
const [Count, setCount] = useState(0);
return (
<div>
<h1>Count: {Count}</h1>
<button onClick={() => setCount(Count + 1)}>Update Count</button>
</div>
)

}
export default Count;