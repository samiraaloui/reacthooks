import React ,{useState} from 'react'
import {Modal , Button, FormControl} from 'react-bootstrap'
import './AddMovie.css'
const AddMovie = ({getMoviesData}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[newMovie  , setNewMovie]=useState({
      title :"",
      descripption :"",
      poster : "",
      rating : 0
  })

  const handleChange=(e)=>{
      setNewMovie({...newMovie , [e.target.name] : e.target.value})
  }
  const handleSubmit = ()=>{
    getMoviesData(newMovie)
    handleClose()
  }
    return (
        <div  className="add">
            <Button  onClick={handleShow} >Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}  style={{color:'#AC2873'}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
         <label>Enter title</label>
         <FormControl type="text" name="title" onChange={handleChange}  style={{color:'black'}}/>
         <label>Enter description</label>
         <FormControl type="text" name="description" onChange={handleChange} style={{color:'black'}} />
         <label>Enter poster</label>
         <FormControl type="text" name="poster" onChange={handleChange} style={{color:'black'}}/>
         <label>Enter rating</label>
         <FormControl type="number" name="rating" min="1" max="5" onChange={handleChange}style={{color:'black'}}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
