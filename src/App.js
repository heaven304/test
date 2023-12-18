

import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';



function App() {

  const [data, setData] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    getData()



  }, [])


  const getData = () => {
    axios.get('http://localhost:8080/api/v1/user')
      .then((response) => {
        // handle success
        console.log(response);
        // setData(response.data.data)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }


  const handleSUbmit = () => {

    // let tokenData = 'Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRlY29kZSIsImVtYWlsIjoiZGVjb2RlQGdtYWlsLmNvbSJ9.QelMUK9T2RUUYHd1FvlEyE5ML5fn8ax1Y1MrxPIuhN0'
    // let asdf = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: tokenData,
    //   },
    // };
    let obj = { "name": "Softtech", "salary": "25000", "age": "28" }

    axios.post('http://localhost:8080/signup', obj)
      .then((response) => {
        // handle success

        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })




  }





  return (
    <>
      <Container>
        <Row>
          {data.map((item) => {
            return (
              <Col lg={3} md={6} >
                <div>
                  <img src={item.avatar} ></img>
                  <p>{item.email}</p>
                  <h3>{item.first_name + ' ' + item.last_name}</h3>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>

      <button onClick={handleSUbmit}>Clickme</button>

    </>
  );
}

export default App;
