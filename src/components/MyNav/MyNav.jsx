import React from 'react'
import {Navbar, FormControl, Nav, Container } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";

function MyNav({handelTitle , handleStar}) {
    const ratingChanged = (newRating) => {
      handleStar(newRating);
      };

     const handleChange =(e)=>{
      handelTitle(e.target.value)
     };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <FormControl
    type="search"
    placeholder="type your search"
    onChange={handleChange}/>
    </Container>
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </Navbar>
        </div>
    )
}

export default MyNav
