import React, { useEffect, useState } from "react";
import './CSS/Home.css'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



const Home = () => {
  const [users, setusers] = useState()
  useEffect(() => {
    fetch("http://localhost:9000/")
      .then(val => val.json())
      .then(result => {
        console.log(result);
        setusers(result)

      })
  }, [])
  return (
    <>
      <div className="home">
        <Container>
          <Row>
            {
              users && users.map(val =>
                <Col className="coll">
                  <div class="card">
                    <div class="card-details">
                      <p class="text-title">{val.name}</p>
                      <p class="text-body">{val.password}</p>
                    </div>
                    <Link class="card-button nav-link" to={"/t/singleU" + val.id}> More info</Link>
                  </div>
                </Col>
              )
            }
          </Row>
        </Container>
      </div >

    </>)
}

export default Home