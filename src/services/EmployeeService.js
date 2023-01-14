import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:3003/employees/list";

class EmployeeService {
    getALLEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

export default new EmployeeService();