import React from "react"
import "../stylesheets/Profiles.css"
export default class EmployeeProfile extends React.Component {


    render = () => {
        return (
            <div className='profile' key={this.props.employee.name}>
                <div id="profHeader">
                    <div className="profPic" id={this.props.employee._id}></div>
                    <div className="profileLogo"></div>
                </div>
                <div className="description">
                    <h4>{this.props.profileInfo[0]}</h4><br/>
                    Level {this.props.employee.level}
                    <ul>
                        <li>{this.props.profileInfo[1]}</li>
                        <li>{this.props.profileInfo[2]}</li>
                        <li>{this.props.profileInfo[3]}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
