import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {

    const Navigate = useNavigate()
    const [data, setdata] = useState([])


    useEffect(() => {
        GetDataFromDatabase()
    }, [])

    const GetDataFromDatabase = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((response) => {
                // handle success
                console.log(response.data.data);
                setdata(response.data.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }

    const handleView = (id) => {

        Navigate('profile/' + id)
    }


    return (
        <>


            <table>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {data.map((item) => {
                    return (
                        <tr>
                            <td> <img src={item.avatar} /> </td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => handleView(item.id)} >view</button></td>
                        </tr>
                    )
                })}
            </table>

            <Link to={'/about'}>About</Link>

        </>
    )
}

