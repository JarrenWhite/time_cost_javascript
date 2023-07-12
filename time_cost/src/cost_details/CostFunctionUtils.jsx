import {TaxCalcUtils} from "../tax_calcs/TaxCalcUtils.jsx";

export function CostFunctionUtils({salary, payFrequency, hours, hourFrequency}) {
    // Number of times per year that the event occurs
    const timesPerYear = {'Week': 52, 'Month': 12, 'Year': 1, 'Four Weeks': 13}

    const {calculateNetIncome} = TaxCalcUtils();

    const recalculatePayPerHour = (predictTax) => {
        // If payFrequency is hourly, already have pay per hour
        if (payFrequency === 'Hour') {
            return parseFloat(salary);
        }

        // Else, calculate pay per year & hours per year
        const yearlySalary = parseFloat(salary) * timesPerYear[payFrequency];
        const yearlyHours = parseFloat(hours) * timesPerYear[hourFrequency];
        const normalPayPerHour = yearlySalary / yearlyHours;

        // If tax to be predicted, return both types
        if (predictTax) {
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