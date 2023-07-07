export function CostFunctionUtils({salary, payFrequency, hours, hourFrequency}) {
    // Number of times per year that the event occurs
    const timesPerYear = {'Week': 52, 'Month': 12, 'Year': 1, 'Four Weeks': 13}

    const recalculatePayPerHour = () => {
        // If payFrequency is hourly, already have pay per hour
        if (payFrequency === 'Hour') {
            return parseFloat(salary);
        }

        // Else, calculate pay per year & hours per year
        const yearlySalary = parseFloat(salary) * timesPerYear[payFrequency];
        const yearlyHours = parseFloat(hours) * timesPerYear[hourFrequency];
        return (yearlySalary / yearlyHours);
    }

    return {
        recalculatePayPerHour
    }
}