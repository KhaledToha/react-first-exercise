import { useState } from "react"

const Part1 = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((pre) => pre + 1)
    }

    const handleDecrement = () => {
        setCount((pre) => pre - 1)
    }

    const resetCount = () => {
        setCount((pre) => 0)
    }

    return <div>
        <h1>Count {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        <button onClick={resetCount}>Reset</button>
    </div>
}


const BackgroundColor = () => {
    const colors = ['red', 'blue', 'green', 'black']
    const [color, setColor] = useState('white')


    const changeColor = ({ color }) => {
        setColor((pre) => color)
    }

    return <div style={{ backgroundColor: color, height: 100 }}>
        {colors.map(color => <button key={color} onClick={() => changeColor({ color })}>{color}</button>)}
    </div>
}


const TodoApp = () => {
    const count = 0
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const addTodo = () => {

        setTodos((pre) => [...todos, {
            id: todos.length + 1,
            desc: input
        }])

    }

    const deleteItem = (id) => {
        setTodos((pre) => pre.filter(todo => todo.id != id))
    }

    return <>
        <div>
            <input type="text" onChange={(e) => setInput((pre) => e.target.value)} />
            <button onClick={() => addTodo(input)}>add</button>
        </div>
        <div>
            {
                todos.map(todo => {
                    return <li key={todo.id} className="todo-item">
                        <p >{todo.desc}</p>
                        <button onClick={() => deleteItem(todo.id)}>Delete</button>
                    </li>
                })
            }
        </div>
    </>
}


const User = () => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [confirmInput, setConfirmInput] = useState('')
    const [users, setUsers] = useState([])

    const handlingAddUser = () => {
        if (confirmInput === passwordInput) {
            setUsers((pre) => [...pre, {
                id: users.length + 1,
                email: emailInput,
                password: passwordInput
            }])
        }
        console.log(users);
    }
    const deleteUser = (id) => {
        setUsers((pre) => pre.filter(user => user.id !== id))
    }

    return <>
    <form >
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={(e) => setEmailInput((pre) => e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={(e) => setPasswordInput((pre) => e.target.value)} />
        <label htmlFor="confirm">confirm password</label>
        <input type="password" name="confirm" onChange={(e) => setConfirmInput((pre) => e.target.value)} />
        <button type="submit" onClick={(e)=> {
            e.preventDefault()
            handlingAddUser()
            
        }}>Submit</button>
        {
            confirmInput !== passwordInput &&
            <p style={{ color: 'red' }}>password and confirm-password are not the same</p>
        }
    </form>
    <div >
        {users.map(user => {
            return <li className="user-list" key={user.id}>
                <p key={user.id}>{user.email}</p>
                <button onClick={()=> deleteUser(user.id)}>Delete</button>
            </li>
        })}
    </div>
    </>


}

export { Part1, BackgroundColor, TodoApp, User }