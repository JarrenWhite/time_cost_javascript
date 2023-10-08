import {useEffect, useState} from "react";

export function HoursCostFunctionUtils() {
    // Cost setting variables
    const [financialCost, setFinancialCost] = useState('');
    const [hoursCost, setHourCost] = useState('00:00');

    // Switch hours from decimal form to human-readable format
    const hoursToReadable = (decimalHours) => {
        const fullHours = Math.floor(decimalHours);
        const minutes = Math.round((decimalHours - fullHours) * 60).toString();

        // If minutes string is too short
        if (minutes.length === 1) {
            return fullHours + ':0' + minutes
        }

        return fullHours.toString() + ':' + minutes;
    }

    const calculateTimeCost = (itemCost, hourlyPay) => {
        if (hourlyPay !== 0 && itemCost !== 0) {
            return hoursToReadable(itemCost / hourlyPay);
        }
        return '--:--';
    }

    // Cost display props
    const costDisplayProps = {
        financialCost,
        setFinancialCost,
        hoursCost,
        setHourCost,
        calculateTimeCost
    };

    return {
        financialCost,
        setFinancialCost,
        hoursCost,
        setHourCost,
        hoursToReadable,
        calculateTimeCost,
        costDisplayProps
    }
}