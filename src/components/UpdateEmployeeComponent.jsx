/* Composant de fonctionnel */

import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployeeComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
    console.log('employee => ' + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, id).then((res) => {
      navigate('/employees');
    });
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

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
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

                <button className="btn btn-success" onClick={updateEmployee}>
                  Update
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

export default UpdateEmployeeComponent;

/*Dans ce composant fonctionnel, nous utilisons les hooks useState pour gérer les états des champs d'entrée, useEffect pour effectuer une action au moment du montage, et useNavigate et useParams pour gérer la navigation et obtenir les paramètres d'URL.*/

/* Composant de classe

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class UpdateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, 
                       emailId: this.state.emailId};
                       console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName, 
               lastName: employee.lastName,
               emailId: employee.emailId});
        });
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
                            <h3 className="text-center">Update Employee </h3>
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

                                    <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
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

export default UpdateEmployeeComponent; */