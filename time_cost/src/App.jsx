import './App.css'
import './css/Default.css'
import WageForm from "./wage_form/WageForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SalaryFunctionUtils} from "./wage_form/SalaryFunctionUtils.jsx";
import CostDisplay from "./cost_details/CostDisplay.jsx";
import {HoursCostFunctionUtils} from "./cost_details/HoursCostFunctionUtils.jsx";
import {Cookies} from "react-cookie";
import {CookiesUtils} from "./wage_form/CookiesUtils.jsx";
import {useEffect, useState} from "react";
import TaxSelectionForm from "./tax_calcs/TaxSelectionForm.jsx";

function App() {
    const [denyCookies, setDenyCookies] = useState(true)
    const [loading, setLoading] = useState(true)
    const cookies = new Cookies()

    const {
        payPerHour,
        taxedPayPerHour,
        predictTax,
        salaryFunctionComponents,
    } = SalaryFunctionUtils(cookies, denyCookies, setDenyCookies,);
    const {
        costDisplayProps
    } = HoursCostFunctionUtils();
    const { readCookie } = CookiesUtils(salaryFunctionComponents);

    useEffect(() => {
        const initialise = async () => {
            await readCookie();
            setLoading(false); // Set loading state to false after readCookie completes
        };
        initialise().then(r => {});
    }, []);


    // Render loading state while waiting for readCookie
    if (loading) {
        return <div>Loading...</div>;
    }

    // Then render full page
    return (
        <>
            <WageForm {...salaryFunctionComponents} />
            <TaxSelectionForm {...salaryFunctionComponents}/>
            <CostDisplay payPerHour={payPerHour} taxedPayPerHour={taxedPayPerHour} predictTax={predictTax} {...costDisplayProps} />
        </>
    )
}

export default App
