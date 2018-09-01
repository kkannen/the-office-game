import React from "react"

export default class EmployeeButton extends React.Component {

    hireOrLevelUp = () => this.props.employee.level > 0? "LEVEL UP FOR" : "HIRE FOR"


    render = () => {
        const employee = this.props.employee
        return (
            <button className='employeeButton' onClick={this.props.levelUp}>
                <h1>{employee.name.toUpperCase()}</h1> <br/>
                <p>Sells {employee.rate} pieces of paper/sec</p><br/>
                <p>{this.hireOrLevelUp()} {employee.price} PIECES OF PAPER</p><br/>
            </button>
        )
    }
}