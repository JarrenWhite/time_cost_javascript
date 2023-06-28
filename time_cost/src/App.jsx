import './App.css'
import './css/Default.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SalaryFunctionUtils} from "./wage_form/SalaryFunctionUtils.jsx";
import CostDisplay from "./cost_details/CostDisplay.jsx";
import {HoursCostFunctionUtils} from "./cost_details/HoursCostFunctionUtils.jsx";

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
