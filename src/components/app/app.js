import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {name: 'John H.', salary: 800, increase: false, rise:true, id:1},
                {name: 'Alex M.', salary: 3000, increase: true, rise:false, id:2},
                {name: 'Carla W.', salary: 5000, increase: false, rise:false, id:3},
            ]
        }
        this.maxId = 4;
    } 

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            } // filters and returns a new arr
        })
    }

    addItem = (name, salary) => {  
        const newItem = {
            name,
            salary, 
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => ({
            data: [...data, newItem]
        })) //spread создаёт новый массив
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index]; // старый объект
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })

        //1) return new obj со свойством data: формируем новый массив map
        //2) когда идет перебор объектов, если совпадают item.id === id - нашли нужный объект, возвращаем новый объект, который содержит сущность {...item, increase: !item.increase} 
        //3) условие не совпало - return obj
        //4) получаем массив объектов с измененным значением 

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase} 
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise} 
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length; 
        const increased = this.state.data.filter(item => item.increase === true).length;
     
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
    
                <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;