import './App.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SalaryInfoFunctions} from "./wage_form/SalaryInfoFunctions.jsx";

function App() {
    const {
        salary,
        payFrequency,
        hours,
        hourFrequency,
        payPerHour,
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
        wageFormProps,
    } = SalaryInfoFunctions();



    return (
        <>
            <WageForm {...wageFormProps} />
            <label>{payPerHour.toFixed(2)}</label>
        </>
    )
}

export default App
