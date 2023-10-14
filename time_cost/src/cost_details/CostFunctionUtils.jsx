import {TaxCalcUtils} from "../tax_calcs/TaxCalcUtils.jsx";

export function CostFunctionUtils({salary, payFrequency, hours, hourFrequency}) {
    // Number of times per year that the event occurs
    const timesPerYear = {'Week': 52, 'Month': 12, 'Year': 1, 'Four Weeks': 13}

    const {calculateNetIncome} = TaxCalcUtils();

    const recalculatePayPerHour = (predictTax) => {
        let yearlySalary = 0;
        const yearlyHours = parseFloat(hours) * timesPerYear[hourFrequency];
        let normalPayPerHour = 0;

        // If payFrequency is hourly, calculations are different
        if (payFrequency === 'Hour') {
            normalPayPerHour = parseFloat(salary);
            yearlySalary = parseFloat(salary) * yearlyHours;
        } else {
            yearlySalary = parseFloat(salary) * timesPerYear[payFrequency];
            normalPayPerHour = yearlySalary / yearlyHours;
        }

        // If tax to be predicted (and can be), return both types
        if (predictTax && yearlyHours > 0) {
            const taxedPayPerHour = calculateNetIncome(yearlySalary) / yearlyHours;
            return [normalPayPerHour, taxedPayPerHour];
        }

        // Else just the one
        return [normalPayPerHour];
    }

    return {
        recalculatePayPerHour
    }
}