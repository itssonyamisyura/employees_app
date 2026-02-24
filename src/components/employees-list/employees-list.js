import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; // вытаскиваем id
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)} /> 
            //name= {item.name} salary= {item.salary} = {...item}

        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployeesList;

// 1) в компонент EmployeesList приходит data (массив с объектами для построения новых компонентов) 
// 2) перебираем эти элементы при помощи map, где каждый объект внутри массива item
// 3) callback функция возвращает компонент <EmployeesListItem name= {item.name} salary= {item.salary}/> которому назначаются пропсы
// 4) тк результатом map является новый массив -> в elements лежит массив с компонентами
// 5) подставляем этот массив <ul className="app-list list-group"> {elements} </ul>
