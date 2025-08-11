import React from 'react'

const UserCard = ({name, age}) => {
  return (
    <>
    <h2>Hello {name} your age is: {age}</h2>
    <p>Age after 5 years: {age + 5}</p>
    </>
  )
}

export default UserCard