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
    this.state ={show:false}
  }
  addNewStudent=()=>{
    this.props.addStudent({
      id:Math.max(...this.props.studentList.map(function(o){return o.id})) + 1,
      schoolname:'',
      grade:'',
      division:''
    });
    this.setState({
      show: true
    });
  }

  editStudentSubmit=(id,schoolname,grade,division)=>{
    this.props.updateStudent({id:this.props.studentList[this.props.studentList.length - 1].id,
      schoolname:schoolname,
      grade:grade,
      division:division});
      this.setState({
        show: false
      });
  }
  render() {
    return (
      this.state.show === true ? <StudentNewForm addNewStudent = {this.props.studentList[this.props.studentList.length - 1]}
                                      editStudentSubmit={this.editStudentSubmit}/> :
          <Container>
            <Row className="justify-content-md-center" style={{"marginTop": "20px"}}>
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
