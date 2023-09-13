import { useState } from "react";



const [state, setState] = useState(null);


<input type="textarea" onChange='setState' >{state}</input>