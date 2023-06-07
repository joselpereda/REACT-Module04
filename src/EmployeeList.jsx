import React from 'react'
import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'

const initialEmployees = [
    {
        id: 1,
        name: 'Jose Pereda',
        ext: 1124,
        email: 'joselpereda@live.com',
        title: "Chief Tech Architect",
        dateHired: new Date('2005-08-28'),
        isEmployed: true,
    },
    {
        id: 2,
        name: 'Sally Smith',
        ext: 1125,
        email: 'sallysmith@live.com',
        title: "Director of Sales",
        dateHired: new Date('2010-05-15'),
        isEmployed: true,
    },
]

function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow key={employee.id} employee={employee}/>)
    return(
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed?</th>

                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}

function EmployeeRow (props) {
    const employee=props.employee
    return (<tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.ext}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.dateHired.toDateString()}</td>
        <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
    </tr>
    )
}

export default class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = {employees: []}
        this.createEmployee = this.createEmployee.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        setTimeout (() => {
            this.setState({employees: initialEmployees})
        }, 500)
    }
    createEmployee(employee) {
        employee.id = this.state.employees.length + 1
        const newEmployeesList = this.state.employees.slice()
        newEmployeesList.push(employee)
        this.setState({employees: newEmployeesList})
    }
    render() { 
        return(
            <React.Fragment>
                    <h1>Employee Management Application</h1> 
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable employees={this.state.employees}/>
                    <hr />
                    <EmployeeAdd createEmployee={this.createEmployee} />
            </React.Fragment>
        )
    }
}