import {useEffect, useState} from "react";
import {CostFunctionUtils} from "../cost_details/CostFunctionUtils.jsx";
import {CookiesUtils} from "./CookiesUtils.jsx";

export function SalaryFunctionUtils(cookies, denyCookies, setDenyCookies,) {
    // Variables for salary information
    const [salary, setSalary] = useState('');
    const [payFrequency, setPayFrequency] = useState('Year'); // Hour, Week, Month, Year, Four Weeks
    const [hours, setHours] = useState('');
    const [hourFrequency, setHourFrequency] = useState('Week'); // Hour, Week, Month, Year, Four Weeks
    const [payPerHour, setPayPerHour] = useState(0);

    // Get Pay Per Hour info from wage calculator
    const {recalculatePayPerHour} = CostFunctionUtils({salary, payFrequency, hours, hourFrequency});

    // Update pay per hour on variable change
    useEffect(() => {
        changePayPerHour();
    }, [salary, payFrequency, hours, hourFrequency]);

    // Manage variable changes
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
    const changePayPerHour = () => {
        if (salary !== '' && (payFrequency === 'Hours' || hours !== '')) {
            setPayPerHour(recalculatePayPerHour());
        }
    }

    // Wage form props
    const salaryFunctionComponents = {
        cookies,
        salary,
        payFrequency,
        hours,
        hourFrequency,
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
        denyCookies,
        setDenyCookies,
    };

    // When pay per hour changes
    const { updateCookie } = CookiesUtils(salaryFunctionComponents);
    useEffect(() => {
        updateCookie();
    }, [salary, hours]);

    return {
        salary,
        payFrequency,
        hours,
        hourFrequency,
        payPerHour,
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
        salaryFunctionComponents,
    };
}
