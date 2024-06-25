import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './CSS/App.css'
import { Row, Col, Container } from 'react-bootstrap'
import Sidebar from './Sidebar'

const App = () => {
 
  return (
    <div>

      <Header />
      <Container fluid>

        <Row>
          <Col xl={2} >
             <Sidebar className="side" />
          </Col>
          <Col xl={10}>
             <Outlet  />

          </Col>
        </Row>
      </Container>

      <Footer />

    </div>
  )
}

export default App