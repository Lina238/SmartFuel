import axios from 'axios';

const Employee_API_URL = "http://localhost:8000/employee";

class TabDeEmployeesAction {

    getEmployee(){
        return axios.get(Employee_API_URL);
    }
    getEmployeeById(employeeId){
        return axios.get(Employee_API_URL+ '/' + employeeId);
    }

    ajoutEmployee(employee){
        return axios.post(Employee_API_URL, employee);
    }

    modifierEmployee(employee, employeeId){
        return axios.put(Employee_API_URL + '/' + employeeId, employee);
    }

    supprimerEmployee(employeeId){
        return axios.delete(Employee_API_URL + '/' + employeeId);
    }
}

export default new TabDeEmployeesAction()