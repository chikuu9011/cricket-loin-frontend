import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';
import './CSS/Slider.css'; // Assuming you have a separate CSS file for custom styles
import '@iconify-icons/emojione-monotone/cricket-game'; // Import the specific icon
import './CSS/App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Row >
        {/* Sidebar Column */}
        <Col md={1} className="side d-none d-md-block">
          <div className="crik-img" align="center">
            <img src='./emojione-monotone--cricket-game (1).png' alt='crik-img' style={{ width: '50px', margin: '20px 0' }} />
          </div>
          <ul className="sidebar-menu">
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </Col>

        {/* Main Content Column */}
        <Col md={11}>
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default App;
