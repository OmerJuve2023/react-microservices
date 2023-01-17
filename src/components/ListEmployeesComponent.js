import React, {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService";
import {Link} from "react-router-dom";

const ListEmployeesComponent = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        EmployeeService.getALLEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className={"container"}>
            <h2 className={"text-center"}>
                Lista de Trabajadores
            </h2>
            <Link to={"/add-employee"} className={"btn btn-outline-info mb-2"}>Agregar Empleado</Link>
            <table className={"table table-bordered table-striped"}>
                <thead className={"text-center"}>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                </thead>
                <tbody className={"text-center"}>
                {
                    employees.map(
                        employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListEmployeesComponent