import { useState } from "react";
import Swal from 'sweetalert2';
const Formulario=({addTodo})=>{    
    const [todo,setTodo] = useState({
        title:'#01',
        description:'descripcion',
        state:'pendiente',
        priority:false});

    const {title,description,state,priority}=todo;        
    const handleSubmit =(e)=>{
        e.preventDefault();       
        if(!title.trim() || !description.trim()){
            return Swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Titulo y descripción obligatorio', 
            }); 
        }
        addTodo({
            id:Date.now(),
            ...todo,
            state:state==='completado'?true:false
        });
        Swal.fire({
            position:'center',
            icon:'success',
            title:'Todo agregado exitosamente',
            showConfirmButton:false,
            timer:1500,
        })
         console.log(title,description,state,priority); 
    }

    const handleChange=e=>{ 
        const {name,type,checked,value} =e.target;
 
        setTodo({...todo, 
            [name]: type==='checkbox'?checked:value})
    }
    
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
            <button type="submit" className="btn btn-primary">Agregar Todo</button> 
        </form>
    );
}

export default Formulario;