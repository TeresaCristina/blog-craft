import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Create from './pages/create'
import Edit from './pages/edit'
import Home from './pages/home'
import Post from './pages/post'
import Login from './pages/login'

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
     
        <Image
          src="avatar.jpeg"
          width="50"
          style={{ borderRadius: '50%' }}
          className="d-block img-fluid mx-auto"
        />
    
      <Navbar.Brand href="/">Itch To Stitch by Teresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/posts">All Posts</Nav.Link>           
          </Nav>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/new" element={<Create />} />
        <Route path="/posts/:id/edit" element={<Edit />} />
      </Routes>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>
            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>


        </form>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}
export default App