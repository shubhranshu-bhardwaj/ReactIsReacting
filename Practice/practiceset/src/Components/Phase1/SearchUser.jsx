/*
Search Filter for Users
Requirements:

Input field: “Search users…”

Show a list of user names.

The list updates as you type (case-insensitive match).

If no match found → Show "No results found".

Hint: Use .filter() before .map().
*/

import React, { useState } from 'react'

const SearchUser = () => {

  const [search, setSearch] = useState('')

  const users = [
    'Amit',
    'Priya',
    'Ravi',
    'Sneha',
    'Arjun',
    'Neha',
    'Vikram',
    'Kavita',
  ];

  const filteredUsers = users.filter((user) => user.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search user'
      />
      <ul>
        {
          filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => <li key={index}>
              {user}
            </li>)
          ) : (
            <li>No results found..</li>
          )
        }
      </ul>
    </>
  )
}

export default SearchUser