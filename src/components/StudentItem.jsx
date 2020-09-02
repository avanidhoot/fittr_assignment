import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import StudentDetail from './StudentDetail';

export default class StudentItem extends Component {
  constructor(props){
    super(props);
    this.state = {showCard: false}
  }
  cardShowClick = () => {
    this.setState({showCard: true})
  }
  cardHideClick = () => {
    this.setState({showCard: false})
  }
  
    render() {
      const {name,schoolname,grade,division} = this.props.student;
      return (
        this.state.showCard === true ? <StudentDetail student={this.props.student} cardHideClick={this.cardHideClick}/> :
        <Card className="text-center" onClick={this.cardShowClick}>
          <Card.Header>Student_Name:{name}</Card.Header>
          <Card.Body>
            <Card.Text>
              SchoolName:{schoolname}
              <br/>
              Grade: {grade}
              <br/>
              Division: {division}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }