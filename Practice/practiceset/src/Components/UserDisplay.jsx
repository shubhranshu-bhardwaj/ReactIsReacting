import React from 'react'
import UserCard from './UserCard'

const UserDisplay = () => {
    const users = [
        { name: "Shubh", age: 23 },
        { name: "Adarsh", age: 23 },
        { name: "Raushan", age: 23 }
    ];
    return (
        <>
            <UserCard name="Shubh" age={23} />
            <UserCard name="Adarsh" age={23} />
            <UserCard name="Raushan" age={23} />

            {
                users.map((u) => (
                    <UserCard key={u.name} name={u.name} age={u.age} />
                ))
            }
        </>
    )
}

export default UserDisplay