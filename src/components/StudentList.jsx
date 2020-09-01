import React, { Component } from 'react';
import StudentItem from './StudentItem.jsx';

export default class StudentList extends Component {
    render() {
      let students = this.props.studentList;
      const trItem = students.map( (item,index) => <StudentItem key={index} 
      student={item} 
      index={index} 
      />)
      return (
            <div>{trItem}</div>
      );
    }
  }