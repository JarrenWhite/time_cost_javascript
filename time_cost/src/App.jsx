import {useState} from 'react'
import './App.css'
import WageForm from "./wage_form/WageForm.jsx";

function App() {
    const [salary, setSalary] = useState(0);
    const [payFrequency, setPayFrequency] = useState('Year'); // Hour, Day, Week, Month, Year, Four Weeks
    const [hours, setHours] = useState(0);
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
            <WageForm salary={salary} changeSalary={changeSalary} payFrequency={payFrequency} changePayFrequency={changePayFrequency}
            hours={hours} changeHours={changeHours} hourFrequency={hourFrequency} changeHourFrequency={changeHourFrequency}/>
        </>
    )
}

export default App
