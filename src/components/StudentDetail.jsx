import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
export default class StudentDetail extends Component {
    constructor(props){
        super(props);
      }
        render() {
          const {name, schoolname, grade, division} = this.props.student;
          return (
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>SchoolName:{schoolname}</p>
                    <p>Grade:{grade}</p>
                    <p>Division:{division}</p>
                </Modal.Body>
                <Modal.Footer>
                   <Button variant="secondary" onClick={this.props.cardHideClick}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
          );
        }
      
}