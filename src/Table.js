import React from 'react'

export default function Table(props) {
    return (
        <table className='table'>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Edit</th>

            {props.asd.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.pass}</td>
                        <td><button onClick={() => { props.remove(item.id) }}>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                )
            })}
        </table>
    )
}
