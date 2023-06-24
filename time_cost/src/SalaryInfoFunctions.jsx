import {useState} from "react";

export function SalaryInfoFunctions() {
    const [salary, setSalary] = useState('');
    const [payFrequency, setPayFrequency] = useState('Year'); // Hour, Day, Week, Month, Year, Four Weeks
    const [hours, setHours] = useState('');
    const [hourFrequency, setHourFrequency] = useState('Week'); // Hour, Day, Week, Month, Year, Four Weeks

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
        changeSalary,
        changePayFrequency,
        changeHours,
        changeHourFrequency,
        wageFormProps
    };
}

