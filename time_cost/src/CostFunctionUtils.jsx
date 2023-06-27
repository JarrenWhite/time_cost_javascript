export function CostFunctionUtils({salary, payFrequency, hours, hourFrequency}) {
    // Number of times per year that the event occurs
    const timesPerYear = {'Week': 52, 'Month': 12, 'Year': 1, 'Four Weeks': 13}

    // Switch hours from human-readable format to decimal form
    const hoursToDecimal = (readableHours) => {
        // If no ':', return hours
        if (!readableHours.includes(':')) {
            return parseFloat(readableHours);
        }

        // If ends with ':', remove and return hours
        if (readableHours.endsWith(':')) {
            return parseFloat(readableHours.split(':')[0]);
        }

        // If contains both hours and minutes, split & add as decimals
        const fullHours = parseFloat(readableHours.split(':')[0]);


        // If minutes is one digit
        const minutes = readableHours.split(':')[1];
        if (minutes.length === 1) {
            const numericMinutes = parseFloat(minutes) / 6
            return fullHours + numericMinutes;
        }

        // Else minutes is two digits
        const numericMinutes = parseFloat(minutes) / 60
        return fullHours + numericMinutes;
    }

    const recalculatePayPerHour = () => {
        // If payFrequency is hourly, already have pay per hour
        if (payFrequency === 'Hour') {
            return parseFloat(salary);
        }

        // Else, calculate pay per year & hours per year
        const yearlySalary = parseFloat(salary) * timesPerYear[payFrequency];
        const yearlyHours = hoursToDecimal(hours) * timesPerYear[hourFrequency];
        return (yearlySalary / yearlyHours);
    }

    return {
        recalculatePayPerHour
    }
}