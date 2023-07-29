import { useRef, useState } from "react";

const NoControlado=()=>{
    const form = useRef(null);
    const [error, setError] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        setError('');
        // console.log('click');
        // console.log(form.current);
        // console.log(new FormData(form.current));
        const data = new FormData(form.current);
        // console.log([...data.entries()]);

        const dataObject = Object.fromEntries([...data.entries()]);
        // console.log(dataObject);

        const {title, description, state} = Object.fromEntries([...data.entries()]);
        // console.log(title,description,state);
        if(!title.trim() || !description.trim() || !state.trim()) return setError('Llena este campo');
    }
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" 
            placeholder="Ingrese Todo" 
            className="form-control mb-2" 
            name="title"
            defaultValue="todo #01"/>
            <textarea className="form-control mb-2" 
            placeholder="Ingrese descripción" 
            name="description"
            defaultValue="descripción #01"/>
            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value="pendiente">pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {
                error != ''?error:''
            }
        </form>
    );
}

export default NoControlado;