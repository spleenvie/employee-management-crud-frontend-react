import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8384/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
       return axios.put(EMPLOYEE_API_BASE_URL + '/'+ employeeId, employee);
       // return axios.put(`http://localhost:8384/api/v1/employees/${employeeId}`, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService();