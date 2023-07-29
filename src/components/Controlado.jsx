import { useState } from "react";

const Controlado=()=>{   
    // const [title,setTitle] = useState('');     
    // const [description,setDescription] = useState('');
    // const [state,setState] = useState('pendiente');
    const [todo,setTodo] = useState({
        title:'#01',
        description:'descripcion',
        state:'pendiente',
        priority:false});

    const {title,description,state,priority}=todo;        
    const handleSubmit =(e)=>{
        e.preventDefault();       
         console.log(title,description,state,priority);
        //console.log(todo);     
    }

    const handleChange=e=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        //e=>setTodo({...todo,priority:e.target.checked})
        const {name,type,checked,value} =e.target;
        // setTodo({...todo, 
        //     [e.target.name]: e.target.type==='checkbox'?e.target.checked:e.target.value})
        // console.log(todo);
        setTodo({...todo, 
            [name]: type==='checkbox'?checked:value})
    }
            // onChange={e=>setTitle(value)}
            //  onChange={e=>setTodo({...todo,title: e.target.value})}/> 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Ingrese Todo" 
            className="form-control mb-2" 
            name="title" 
            value={todo.title}
            onChange={handleChange}/> 

            <textarea className="form-control mb-2" 
            placeholder="Ingrese descripción" 
            name="description" 
            value={todo.description}
            onChange={handleChange}/>

            <div className="form-check mb-2">
                <input type="checkbox" 
                name="priority" 
                className="form-check-input" 
                id="inputCheck"
                checked={todo.priority}
                onChange={handleChange}/> 
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" name="state" value={todo.state} 
            onChange={handleChange}>
                <option value="pendiente">pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button> 
        </form>
    );
}

export default Controlado;