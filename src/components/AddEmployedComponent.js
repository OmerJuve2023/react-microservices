import React, {useState} from "react";

const AddEmployedComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName, lastName, emailId}
        console.log(employee);
    }
    return (

        <div className={"container"}>
            <br/>
            <div className={"row"}>
                <div className={"card col-md-6 offset-md-3"}>
                    <h2>Agregar Empleado</h2>
                    <div className={"card-body"}>
                        <form>
                            <div className={"form-group mb-2"}>
                                <label className={"form-label"}>Nombre:</label>
                                <input
                                    type={"text"}
                                    name={"firstName"}
                                    className={"form-control"}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className={"form-group mb-2"}>
                                <label className={"form-label"}>Apellido:</label>
                                <input
                                    type={"text"}
                                    name={"lastName"}
                                    className={"form-control"}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className={"form-group mb-2"}>
                                <label className={"form-label"}>Email:</label>
                                <input
                                    type={"email"}
                                    name={"emailId"}
                                    className={"form-control"}
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>
                            <button className={"btn btn-success"} onClick={(e) => saveEmployee(e)}>Guardar Empleado
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddEmployedComponent