import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik } from 'formik';
import axios from 'axios';

const FilmsForm = (props) => {
  
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  
  const toggle = ()=>{
    setModal(!modal);
  }

  const save = (values)=>{
    const path = 'http://localhost:5000/api/v0/films';
    axios.post(path, values)
    .then((response) => {
      console.log(response);
      toggle();
    }, (error) => {
      alert(error);
    });
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      score: '',
      director: ''
    },
    onSubmit: values => {
      save(values);
    }
  });

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Films form</ModalHeader>
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control"
                    id="title"
                    name="title"
                    type="text"
                    required="true"
                    onChange={formik.handleChange}
                    value={formik.values.title}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input className="form-control"
                    id="description"
                    name="description"
                    type="text"
                    required="true"
                    onChange={formik.handleChange}
                    value={formik.values.description}/>
            </div>
            <div className="form-group">
              <label htmlFor="score">Score</label>
              <input className="form-control"
                    id="score"
                    name="score"
                    type="number"
                    required="true"
                    onChange={formik.handleChange}
                    value={formik.values.score}/>
            </div>
            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input className="form-control"
                    id="director"
                    name="director"
                    type="text"
                    required="true"
                    onChange={formik.handleChange}
                    value={formik.values.director}/>
            </div>
            <div>
              <Button color="primary" 
                      type="submit">
                      Submit
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default FilmsForm;