import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
// Link component allow users to navigate to the blog post component page
import { Link } from 'react-router-dom'

// utility function to format the creation date
import formatDate from '../lib/formatDate'
import http from '../lib/http'
import {
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
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
      <Container >
        <ListGroup variant="flush" as="ol">
          {posts.map((post) => {
            return (

              <ListGroup.Item key={post._id}>

                <MDBRow className="gx-5 border-bottom pb-4 mb-5">
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








              </ListGroup.Item>

            )
          })}
        </ListGroup>
      </Container>
    </>
  )
}

export default Home