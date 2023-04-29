import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div> 
          <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                  <Link  to="/" style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                      textDecoration: "none",
                      padding: "20px",
                      margin: "20px"
                  }}>Product App</Link>
              </Nav.Item>
              <Nav.Item>
                  <Link to="/products" eventKey="link-1" style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                      textDecoration: "none",
                      padding: "20px",
                      margin: "20px"
                  }}>Products List</Link>
              </Nav.Item>

          </Nav>
  </div>
  )
}

export default Header