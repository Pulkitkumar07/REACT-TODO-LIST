import Create from "./Create";
import Read from "./Read";
import { useState } from 'react';


const App = () => {
  
   const [todos, settodos] = useState([
        { id: 1, title: "kam kr le bro", iscompleted: false }
    ])

  return (
    <div className="flex w-screen h-screen bg-gray-800 p-10"> 
    <Create todos={todos} settodos={settodos} /> 
    <Read todos={todos} settodos={settodos} /> 
    </div>
  );
};
export default App;