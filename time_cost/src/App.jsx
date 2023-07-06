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
        wageFormProps,
    } = SalaryFunctionUtils(cookies);
    const {
        costDisplayProps
    } = HoursCostFunctionUtils({payPerHour});
    const { readCookie } = CookiesUtils(cookies, wageFormProps);

    useEffect(() => {
        readCookie();
    }, []);

    return (
        <>
            <WageForm {...wageFormProps} />
            <CostDisplay payPerHour={payPerHour} {...costDisplayProps} />
        </>
    )
}

export default App
