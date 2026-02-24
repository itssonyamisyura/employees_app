import './app-info.css';


const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee Management System in Company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Receiving a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;