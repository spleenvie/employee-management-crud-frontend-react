
/* Composant Fonctionnel */

import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import {useParams, useNavigate} from 'react-router-dom';

function CreateEmployeeComponent() {
  const navigate = useNavigate();

  // step 2
  const { id } = useParams();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  // step 3
  useEffect(() => {

    //step 4
    if(id === '_add'){
        return
    } else {
        EmployeeService.getEmployeeById(id).then((res) => {
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmailId(employee.emailId);
          });
    } 
  }, [id]);

  const SaveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    };
    console.log('employee => ' + JSON.stringify(employee));

    // step 5
    if(id === '_add'){
        EmployeeService.createEmployee(employee).then((res) => {
            navigate('/employees');
          });
    } else {    
        EmployeeService.updateEmployee(employee, id).then((res) => {
            navigate('/employees');
          });
    }
  }

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  }

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  }

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  }

  const cancel = () => {
    navigate('/employees');
  }

  const getTitle = () => {
    if(id === '_add'){
        return <h3 className="text-center">Add Employee</h3>
    } else {
        return <h3 className="text-center">Update Employee</h3>
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstname"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastname"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={SaveOrUpdateEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;


/* Composant de classe

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee </h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label> First Name </label>
                                        <input placeholder="First Name" name="firstname" className='form-control'
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name </label>
                                        <input placeholder="Last Name" name="lastname" className='form-control'
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Adress </label>
                                        <input placeholder="Email Adress" name="emailId" className='form-control'
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent; */