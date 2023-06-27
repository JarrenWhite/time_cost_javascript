import './App.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SalaryFunctionUtils} from "./wage_form/SalaryFunctionUtils.jsx";
import CostDisplay from "./CostDisplay.jsx";
import {HoursCostFunctionUtils} from "./HoursCostFunctionUtils.jsx";

function App() {
    const {
        payPerHour,
        wageFormProps,
    } = SalaryFunctionUtils();
    const {
        costDisplayProps
    } = HoursCostFunctionUtils({payPerHour})


    return (
        <>
            <WageForm {...wageFormProps} />
            <CostDisplay payPerHour={payPerHour} {...costDisplayProps} />
        </>
    )
}

export default App
