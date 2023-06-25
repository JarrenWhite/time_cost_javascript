function CostDisplay({payPerHour}) {

    // Switch hours from decimal form to human-readable format
    const hoursToReadable = (decimalHours) => {
        const fullHours = Math.floor(decimalHours).toString();
        const minutes = Math.round((decimalHours - fullHours) * 60).toString();

        // If minutes string is too short
        if (minutes.length === 1) {
            return fullHours + ':0' + minutes
        }
        return fullHours + ':' + minutes;
    }

    const calculateTimeCost = (itemCost) => {
        if (payPerHour !== 0) {
            return hoursToReadable(itemCost / payPerHour);
        }
        return '--:--';
    }

    return(
        <>
            <label>Pay Per Hour: £{payPerHour.toFixed(2)}</label>
            <label>£1.00 - {calculateTimeCost(payPerHour)}</label>
            <label>£1.00 - {calculateTimeCost(1)}</label>
            <label>£10.00 - {calculateTimeCost(10)}</label>
            <label>£100.00 - {calculateTimeCost(100)}</label>
        </>
    )
}

export default CostDisplay