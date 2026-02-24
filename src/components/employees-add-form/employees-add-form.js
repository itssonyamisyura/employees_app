import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        // [свойство в объект]
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name.length < 2 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
            <h3>Add a New Employee</h3>
            <form 
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Enter employee name" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange} 
                    required/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Enter salary in $" 
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} 
                    required/>
    
                <button type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
         </div>
        )
    }
}

export default EmployeesAddForm;




// input - запускает onChange, запускает метод onValueChange, setState изменяет состояние и записывает в     this.state = {
        // name: '',
        // salary: ''
        // }  
// setState вызывает метод render и если value стоит в том ключе, что мы используем в state -> в value записывается актуальное значение компонента, значение value контролируется реактом и сам элемент input управляемый
// input typeFile не управляемый