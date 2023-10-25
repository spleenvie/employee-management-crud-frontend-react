import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {Link, useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { withRouter } from 'react-router-dom';

function ListEmployeesComponents() {

    /* constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        //this.redirectToForm = this.redirectToForm.bind(this);
    } */

    const navigate = useNavigate();

    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
          setEmployees(res.data);
        });
      }, []);

      const addEmployee = () => {
        navigate('/add-employee/_add'); // Utilisation de la fonction navigate
      };

      const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
      };

      const editEmployee = (id) => {
        // Naviguer vers la page de mise à jour
        navigate(`/add-employee/${id}`);
      };

      const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => {
            setEmployees(employees.filter((employee) => employee.id !== id));
        });
      }

    /* redirectToForm(){
        //window.location.href='/add-employee';
        this.route.push('dodo');
    } */

        return (
            <div>
                <h2 className="text-center"> Employees List </h2>
                   <div className="row"> 
                        <button className="btn btn-primary" onClick={() => addEmployee()}>Add Employee</button>
                    </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name </th>
                                <th> Employee Last Name </th>
                                <th> Employee Email </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                employees.map(
                                    (employee) => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td><button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            
                                            <button style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>

                                            <button style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                
            </div>
        );
}

export default ListEmployeesComponents;