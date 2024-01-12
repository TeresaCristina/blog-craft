import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// Link component allow users to navigate to the blog post component page
import { Link } from 'react-router-dom'

// utility function to format the creation date
import formatDate from '../lib/formatDate'
import http from '../lib/http'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

const Home = () => {
  // useState allows us to make use of the component state to store the posts
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // Call the server to fetch the posts and store them into the state
    async function fetchData() {
      const { data } = await http.get('/api/posts')
      setPosts(data.data.posts)
    }
    fetchData()
  }, [])

  return (
    <>
      <MDBContainer className="my-5">
        <MDBRow>
          <MDBCol md="8">
            <ListGroup variant="flush" >
              {posts.map((post) => {
                return (
                  <ListGroup.Item key={post._id} >
                    <MDBCard className="p-5">
                      <MDBRow >
                        <MDBCol md="6" className="mb-4">
                          <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                          >
                            <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}><img
                              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                              className="img-fluid"
                            /></Link>
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md="6" className="mb-4">
                          <MDBCol md="6" className="mb-4">
                            <a href="" className="text-info">
                              <MDBIcon fas icon="plane" className="me-1" />
                              Travels
                            </a>
                          </MDBCol>
                          <MDBCol col="6" className="text-end">
                            <span className="text-secondary">{formatDate(post.createdAt)}</span>
                          </MDBCol>
                          <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
                            {post.title}
                          </Link>
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                            consequatur eligendi quisquam doloremque vero ex debitis veritatis
                            placeat unde animi laborum sapiente illo possimus, commodi
                            dignissimos obcaecati illum maiores corporis.
                          </p>
                          <MDBBtn style={{ backgroundColor: '#feb777' }}>Read More</MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </MDBCol>

          
          <MDBCol md="4" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardTitle>Panel title</MDBCardTitle>
                <MDBCardText>
                  <MDBContainer className="my-5 d-flex justify-content-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                      className="rounded-circle mb-3"
                      style={{ width: "150px" }}
                      alt="Avatar"
                    />
                  </MDBContainer>
                  Some quick example text to build on the panel title and make up the bulk of the panel's content.
                </MDBCardText>
                <MDBCardLink href='#'>Panel link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                  <MDBIcon fab icon='instagram' /> Instagram
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                  <MDBIcon fab icon='youtube' />
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Home