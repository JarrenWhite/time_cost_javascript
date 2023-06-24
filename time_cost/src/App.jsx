import './App.css'
import {SalaryInfoFunctions} from "./SalaryInfoFunctions.jsx";
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const {
        salary,
        payFrequency,
        hours,
        hourFrequency,
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
        wageFormProps,
    } = SalaryInfoFunctions();

    return (
        <>
            <WageForm {...wageFormProps} />
        </>
    )
}

export default App
