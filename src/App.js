import React, { Component } from 'react';
import './stylesheets/App.css';
import EmployeeButton from './components/EmployeeButton';
import EmployeeProfile from './components/EmployeeProfile';

class App extends Component {
  state={
    paperSold: 0,
    paperPerSec: 0,
    employees: [
    {
      _id: "michael",
      name: "Michael Scott",
      price: 10,
      rate: 0.1,
      level: 0,
      hired: false
    },
    {
      _id: "ryan",
      name: "Ryan Howard",
      price: 50,
      rate: 1,
      level: 0,
      hired: false
    },
    {
      _id: "pam",
      name: "Pam Beesly-Halpert",
      price: 100,
      rate: 5,
      level: 0,
      hired: false
    },
    {
      _id: "stanley",
      name: "Stanley Hudson",
      price: 500,
      rate: 10,
      level: 0,
      hired: false
    },
    {
      _id: "phyllis",
      name: "Phyllis Lapin-Vance",
      price: 1000,
      rate: 50,
      level: 0,
      hired: false
    },
    {
      _id: "andy",
      name: "Andy Bernard",
      price: 5000,
      rate: 100,
      level: 0,
      hired: false
    },
    {
      _id: "jim",
      name: "Jim Halpert",
      price: 10000,
      rate: 500,
      level: 0,
      hired: false
    },
    {
      _id: "dwight",
      name: "Dwight Schrute",
      price: 50000,
      rate: 1000,
      level: 0,
      hired: false
    },
  ],
  profileInfo: {
    michael: ["Michael Scott - Manager", "World's best boss", "Former salesman", "HR nightmare"],
    ryan: ["Ryan Howard - Temp", "Went to business school", "Commitment issues", "Terrible salesman"],
    pam: ["Pam Halpert - Office Admin.", "Dropped out of art school", "whitest skeakers", "I think she and Jim have a thing"],
    andy: ["Andy 'Nard Dog' Bernard - Sales", "Anger Issues", "was in an acapella group", "Went to Cornell I think"],
    jim: ["Jim Halpert - Sales", "Prankster", "Talented, but low work ethic", "tall"],
    dwight: ["Dwight Schrute - Sales", "Beet farmer", "Top salesman", "Assistant (to the) Regional Manager"],
    phyllis: ["Phyllis Vance - Sales", "Married to Bob Vance (Vance Refrigeration)", "Deceptively Snarky", "Uses perfumey soap"],
    stanley: ["Stanley Hudson - Sales", "Crossword Expert", "High Blood Pressure", "can do 26 pushups"],
  }
}

  componentDidMount = () => {
    setInterval(this.paperPerSec, 1000)
  }

  paperPerSec = () => {
    const newTotalPaperSold = this.state.paperSold + this.state.paperPerSec
    this.setState({paperSold: newTotalPaperSold})
  }

  handleSale = () => this.setState({paperSold: this.state.paperSold + 1})

  levelUp = (employee, index) => {

    if(this.state.paperSold >= employee.price) {
      const employees = [...this.state.employees]
      const newPrice = Math.round((employee.price)*1.3)
      const newPaperSold = this.state.paperSold - employee.price
      Object.assign(employees[index], {level: employee.level+1, price: newPrice, hired: true})
      this.setState({employees: employees, paperSold: newPaperSold, paperPerSec: this.state.paperPerSec + employee.rate})
    }
  }

  renderEmployeeButtons = () => {
    return this.state.employees.map((employee, index) => {
      if(index===0 || (index > 0 && this.state.employees[index-1]["hired"])) {
        return (
          <EmployeeButton 
          key={employee.name} 
          employee={employee} 
          levelUp={()=>this.levelUp(employee, index)}/>
        )
      } else {
        return null
      }
  })
  }

  renderEmployeeProfiles = () => {
    
    return this.state.employees.map((employee) => {
      if(employee.hired) {
        console.log(this.state.profileInfo[employee._id])
        return (
          <EmployeeProfile 
          employee={employee} 
          key={employee._id} 
          profileInfo={this.state.profileInfo[employee._id]}/>
        )
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <div className="App" style={{display: "flex"}}>
        <div className='sidebar'>
          <button className='paperButton' onClick={this.handleSale}>
            <h1>CLICK HERE TO SELL PAPER</h1><br/>
            <p>Paper sold: {this.state.paperSold.toFixed(1)}</p>
            <em>{this.state.paperPerSec.toFixed(1)} sheets/sec</em>
          </button>
          {this.renderEmployeeButtons()}
        </div>
        <div className="main" > 
          <div className='dmLogo'></div>
          <div className='employeeProfiles'>
            {this.renderEmployeeProfiles()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
