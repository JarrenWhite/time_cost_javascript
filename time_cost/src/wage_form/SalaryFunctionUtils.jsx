import {useEffect, useState} from "react";
import {CostFunctionUtils} from "../cost_details/CostFunctionUtils.jsx";

export function SalaryFunctionUtils() {
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

    // When pay per hour changes
    useEffect(() => {
        updateCookie();
    }, [payPerHour]);

    const updateCookie = () => {
        // If either are empty, don't proceed
        if (salary === '' || hours === '') {
            return;
        }

        // Creat cookie as an array
        const cookieArray = {
            salary: salary,
            payFrequency: payFrequency,
            hours: hours,
            hourFrequency: hourFrequency,
        }

        // Serialise content of cookie
        const cookieString = JSON.stringify(cookieArray);
        console.log(cookieArray);
        console.log(cookieString);
    }

    // Wage form props
    const wageFormProps = {
        salary,
        payFrequency,
        hours,
        hourFrequency,
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
    };

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
        wageFormProps
    };
}

