import './App.css'
import './css/Default.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SalaryFunctionUtils} from "./wage_form/SalaryFunctionUtils.jsx";
import CostDisplay from "./cost_details/CostDisplay.jsx";
import {HoursCostFunctionUtils} from "./cost_details/HoursCostFunctionUtils.jsx";
import {Cookies} from "react-cookie";
import {CookiesUtils} from "./wage_form/CookiesUtils.jsx";
import {useEffect} from "react";

function App() {
    const cookies = new Cookies()

    const {
        payPerHour,
        salaryFunctionComponents,
    } = SalaryFunctionUtils(cookies);
    const {
        costDisplayProps
    } = HoursCostFunctionUtils({payPerHour});
    const { readCookie } = CookiesUtils(salaryFunctionComponents);

    useEffect(() => {
        readCookie();
    }, []);

    return (
        <>
            <WageForm {...salaryFunctionComponents} />
            <CostDisplay payPerHour={payPerHour} {...costDisplayProps} />
        </>
    )
}

export default App
