import React, { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
export default class StudentNewForm extends Component {
  constructor(props){
        super(props);
  }
  editStudentSubmit=()=>{
    this.props.editStudentSubmit(
    this.id,
    this.nameInput.value,
      this.schoolnameInput.value,this.gradeInput.value,
      this.divisionInput.value);
  }
    render() {
        const {id,name,schoolname,grade,division} = this.props.addNewStudent;
        return (
              <Form onSubmit = {this.editStudentSubmit}>
                <Form.Group controlId="Schoolform">
                  <Form.Label>School ID:{id}</Form.Label><br/>
                  <Form.Label>StudentName</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Student Name"
                          ref={nameInput => this.nameInput = nameInput} defaultValue ={name}
                  />
                  <Form.Label>SchoolName</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="School Name"
                          ref={schoolnameInput => this.schoolnameInput = schoolnameInput} defaultValue ={schoolname}
                  />
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Grade"
                          defaultValue={grade} ref={gradeInput => this.gradeInput = gradeInput}
                  />
                  <Form.Label>Division</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Division"
                          defaultValue={division}
                          ref={divisionInput => this.divisionInput = divisionInput}
                  />
                  
                  
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 5 }}>
                    <Button variant="primary" type="submit" className="text-center">
                      Submit
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            )}
}