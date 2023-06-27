function CostDisplay({payPerHour, financialCost, setFinancialCost, hoursCost, setHourCost, calculateTimeCost}) {
    const costRegex = /^\d*\.?\d?\d?$/

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '') {
            setFinancialCost(inputValue);
            setHourCost('--:--');
        } else if (costRegex.test(inputValue)) {
            setFinancialCost(inputValue);
            setHourCost(calculateTimeCost(parseFloat(inputValue)));
        }
    }

    return(
        <div>
            <label>Pay Per Hour: £{payPerHour.toFixed(2)}</label>
            <input
                type="text"
                value={financialCost}
                onChange={handleInputChange}
                placeholder="Enter Item Cost"
            />
            <label>Costs {hoursCost} hours of work.</label>
        </div>
    )
}

export default CostDisplay