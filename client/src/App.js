import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import Create from './pages/create'
import Edit from './pages/edit'
// We are going to implement each one of these "pages" in the last section
import Home from './pages/home'
import Post from './pages/post'

function App() {
  return (
    <>
 



      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
      <Navbar.Brand href="/">My Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/posts/new">New</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/new" element={<Create />} />
        <Route path="/posts/:id/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App