/*
Conditional Table Rows
Requirements:

Table of employees (name + role + active status).

If active is false, render the row with grey background and italic text.

If active is true, render normally.
*/

import React from 'react'

const ActiveEmployee = () => {

    const employees = [
        { id: 1, name: 'Amit Sharma', active: true },
        { id: 2, name: 'Priya Verma', active: false },
        { id: 3, name: 'Ravi Kumar', active: true },
        { id: 4, name: 'Sneha Iyer', active: false },
        { id: 5, name: 'Arjun Mehta', active: true },
        { id: 6, name: 'Neha Patil', active: true },
        { id: 7, name: 'Vikram Singh', active: false },
        { id: 8, name: 'Kavita Joshi', active: true },
        { id: 9, name: 'Manish Reddy', active: false },
        { id: 10, name: 'Divya Nair', active: true },
    ];

    return (
        <>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr
                            key={employee.id}
                            style={{
                                backgroundColor: employee.active ? 'white' : '#e0e0e0',
                                fontStyle: employee.active ? 'normal' : 'italic',
                                color: employee.active ? 'black' : 'gray',
                            }}
                        >
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.active ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ActiveEmployee