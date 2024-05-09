import { useReducer, useRef } from 'react';
import './ToDoList.css';

export const ToDoList = () => {

    const inputRef = useRef();

    // creamos una constante con las tareas y la función que vamos a usar --> tasks y dispatch
    // usamos el estado (tasks) y la funcion (dispatch) dentro del useReducer

    /** la funcion dispatch actua como una funcion que modifica el estado (tasks)
     * los elementos que pasan por esta función son los que pasan por el useReducer y modifican el estado
     */

    /** useReducer recibe como parámetros de la función el state (tasks) y el action (dispatch) */
    const [ tasks, dispatch ] = useReducer((state = [], action) => {
        switch (action.type) {
            case "addtasks":{
                return [
                    ...state,
                    {
                        id: state.lenght,
                        title: action.title,
                    }
                ]
            }
            case "removetask": {
                /** para borrar las tareas hacemos un filter donde iteramos sobre cada task
                 * y filtramos todos los index que no son el que ha borrado el user
                 * No hace falta hacer una copia del state porque filter ya nos devuelve una copia del array
                 */
                return state.filter((task, index) => index != action.index)
            }
            default: {
                return state;
            }
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        /** lo que hacemos aqui es enviar un evento de tipo addtasks para que
         * se ejecute en nuestra función reducer y dentro de esa funcion reducer
         * interactúe con el titulo definido en el input
         */
        dispatch({
            type: 'addtasks',
            title: inputRef.current.value,
        })
    }


    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <label>Add a task</label>
                <input type="text" name="title" ref={inputRef}/>
                <button type="submit">
                    Add to the list
                </button>
            </form>
            <div>
                {tasks?.map((task, index) => (
                    // usamos optional chaining en tasks? porque en inicio es un array vacio.
                    // también podemos usar tasks && tasks.map()
                    <div key={index}>
                        <p>{task.title}</p>
                        <button onClick={() => dispatch({
                            type: 'removetask',
                            index, // esto es igual index:index -- se llaman igual y no hace falta poner los dos
                        })}>
                            Borrar
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}
