import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (e) => {
        if(!e.target.value.trim()) return;
        if (e.key === 'Enter') {
            console.log(e.target.value);

            // add new todo item to array
            // todoList.push(e.target.value);
            const todoText = e.target.value;
            setTodoList([...todoList, todoText]);
            console.log(todoList);
            e.target.value = '';
            toast.success('Todo Added successfully');
        }
    }

    const removeTodo = (index) => {
        console.log(index);

        // remove todo item from array
        // todoList.splice(index, 1);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
        toast.success('Todo deleted successfully');
    }

    return (
        <div style={{ backgroundColor: '#ccc', minHeight: '100vh' }}>
            <div className='container'>

                <h1 className='text-center'>Todo Application</h1>
                <hr />

                <div className='card'>
                    <div className="card-header">
                        <input type="text"
                            className='form-control'
                            placeholder='Enter task here'
                            onKeyDown={addNewTodo} />
                    </div>
                    <div className='card-body' style={{height: "70vh", overflow: 'auto'}}>
                        {todoList.map((todo, index) => (<div className='border d-flex justify-content-between p-3' key={index}>
                            <h3>{todo}</h3>
                            <button className='btn btn-danger' onClick={() => { removeTodo(index) }} >Delete</button>
                        </div>))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Todo;