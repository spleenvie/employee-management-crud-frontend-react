import React, { Component, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import {useParams, useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function ViewEmployeeComponent(){
    const navigate = useNavigate();

    const { id } = useParams();

    // const [employees, setEmployees] = React.useState([]);

    const [employee, setEmployee] = React.useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        });
    });

    return(
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'> View Employee Details </h3>
                <div className="card-body">
                    <div className='row'>
                        <label> <b>Employee First Name :</b> </label>
                        <div> {employee.firstName }</div>
                    </div>
                    <div className='row'>
                        <label> <b>Employee Last Name :</b></label>
                        <div> {employee.lastName }</div>
                    </div>
                    <div className='row'>
                        <label> <b>Employee Email : </b></label>
                        <div> {employee.emailId }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent;