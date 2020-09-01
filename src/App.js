import React, { Component } from 'react';
import './App.css';
import StudentList from './components/StudentList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addStudent,updateStudent} from './actions/studentActions'
import StudentNewForm from './components/StudentNewForm';
import { Container, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={show:false, newStudent:{}}
  }
  addNewStudent=()=>{
    let stud = this.props.addStudent({
      id:Math.max(...this.props.studentList.map(function(o){return o.id})) + 1,
      schoolname:'',
      grade:'',
      division:''
    });
    this.setState({
      show: true,
      newStudent: stud.payload
    });
  }

  editStudentSubmit=(id,schoolname,grade,division)=>{
    this.props.updateStudent({id:this.state.newStudent.id,
      schoolname:schoolname,
      grade:grade,
      division:division});
      this.setState({
        show: false
      });
  }
  render() {
    return (
      this.state.show === true ? <StudentNewForm addNewStudent = {this.state.newStudent}
                                      editStudentSubmit={this.editStudentSubmit}/> :
          <Container>
            <Row className="justify-content-md-center" style={{"margin-top": "20px"}}>
              <Col className="text-center">Listing Page of Schools</Col>
            </Row>
            <div className="card-body">
              <StudentList studentList={this.props.studentList}/>
              <Button className="btn btn-dark pull-left" block onClick={this.addNewStudent}>Add New</Button>
            </div>
            </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStudent:addStudent,
    updateStudent:updateStudent
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
