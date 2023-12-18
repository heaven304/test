import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const Navigate = useNavigate()
    const [data, setdata] = useState([])
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [img, setimg] = useState('')


    useEffect(() => {
        let url = window.location.href
        let id = url.substring(url.lastIndexOf('/') + 1)

        GetDataFromDatabase(id)
    }, [])

    const GetDataFromDatabase = (id) => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((response) => {
                // handle success
                console.log(response.data.data);

                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].id == id) {
                        console.log('coem')
                        setimg(response.data.data[i].avatar)
                        setlname(response.data.data[i].last_name)
                        setfname(response.data.data[i].first_name)
                        setemail(response.data.data[i].email)
                    }

                }

                setdata(response.data.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    return (
        <>
            <img src={img}></img>
            <h1>First Name:  {fname}</h1>
            <h1>Last Name: {lname} </h1>
            <h1>Email : {email} </h1>

        </>
    )
}
