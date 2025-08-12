import React, { useState } from 'react'

const UserList = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [users, setUsers] = useState([]);


    // Function to add a user
    const addUser = () => {
        if (name.trim() === "" || age.trim() === "") return;

        // create a new user object
        const newUser = {
            id: Date.now(),
            name,
            age: Number(age)
        };

        // update the user array immutably 
        setUsers([...users, newUser]);

        // clear input fields
        setName("");
        setAge("");
    };

    // Function to delete a user by id

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    }



    return (
        <>
            <h2>Users List</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter name'
            />

            <input
                type="number"
                min={1}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder='Enter age'
            />

            <button onClick={addUser}>Add User</button>

            {/*List user */}
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.age} years old
                            <button onClick={() => deleteUser(user.id)}>Delete User</button>
                        </li>
                    ))
                }
            </ul>

        </>
    )
}

export default UserList