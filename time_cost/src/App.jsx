import {useState} from 'react'
import './App.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [salary, setSalary] = useState('');
    const [payFrequency, setPayFrequency] = useState('Year'); // Hour, Day, Week, Month, Year, Four Weeks
    const [hours, setHours] = useState('');
    const [hourFrequency, setHourFrequency] = useState('Week'); // Hour, Day, Week, Month, Year, Four Weeks

    const changeSalary = (newSalary) => {
        setSalary(newSalary);
    }
    const changePayFrequency = (newFrequency) => {
        setPayFrequency(newFrequency);
    }
    const changeHours = (newHours) => {
        setHours(newHours);
    }
    const changeHourFrequency = (newHourFrequency) => {
        setHourFrequency(newHourFrequency);
    }

    return (
        <>
            <WageForm salary={salary} changeSalary={changeSalary} payFrequency={payFrequency}
                      changePayFrequency={changePayFrequency} hours={hours} changeHours={changeHours}
                      hourFrequency={hourFrequency} changeHourFrequency={changeHourFrequency}/>
        </>
    )
}

export default App
