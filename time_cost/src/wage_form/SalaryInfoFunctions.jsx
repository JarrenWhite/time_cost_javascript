import {useEffect, useState} from "react";
import {WageCalculator} from "../WageCalculator.jsx";

export function SalaryInfoFunctions() {
    const [salary, setSalary] = useState('');
    const [payFrequency, setPayFrequency] = useState('Year'); // Hour, Week, Month, Year, Four Weeks
    const [hours, setHours] = useState('');
    const [hourFrequency, setHourFrequency] = useState('Week'); // Hour, Week, Month, Year, Four Weeks
    const [payPerHour, setPayPerHour] = useState(0);

    const {getPayPerHour, debugPrint} = WageCalculator({salary, payFrequency, hours, hourFrequency});

    useEffect(() => {
        changePayPerHour();
    }, [salary, payFrequency, hours, hourFrequency]);

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
        debugPrint();
        if (salary !== '' && hours !== '') {
            setPayPerHour(getPayPerHour());
        }
    }

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

