import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];
// [{
//   id:1,
//   title:'Todo 1',
//   description:' description 1',
//   state:true,
//   priority:false,
// },
// {
//   id:2,
//   title:'Todo 2',
//   description:' description 2',
//   state:false,
//   priority:true,
// }]

const App=()=>{
  const [todos, setTodo] = useState(initialStateTodos);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addTodo = todo=>{
    setTodo([...todos,todo])
  }

  const deleteTodo = id =>{
    const newArray = todos.filter(todo=> todo.id!==id);
    setTodo(newArray);
  }

  const updateTodo = id=>{ 
    const newArray = todos.map(todo=>{ 
        // if(todo.id === id){
        //   todo.state = !todo.state;
        // }
        todo.state = todo.id===id?!todo.state:todo.state;
        return todo;
    })
   setTodo(newArray);
  }
  const orderTodo = arrayTodo =>{
    return arrayTodo.sort((a,b)=>{
      if(a.priority===b.priority)return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;
    })
  }
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1><Formulario addTodo={addTodo}/>
      <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App;