const taxBrackets = [0, 12570, 50270, 125140]
const taxAmounts = [0, 20, 40, 45]

const ninoBrackets = [0, 175]
const ninoAmounts = [0, 13.8]

export function TaxCalcUtils() {

    // Given an amount of money & a rate of tax, calculate amount payed
    const calculateCost = (amount, taxRate) => {
        const lossRate = taxRate / 100;
        return amount * lossRate;
    }

    const calculateTaxCost = (grossIncome, bracketArray, costsArray) => {
        let runningCost = 0;
        let i = 1;

        // Calculate total cost from each tax bracket
        while (i < bracketArray.length) {
            if (grossIncome <= bracketArray[i]) {
                const earnedInBracket = grossIncome - bracketArray[i-1];
                runningCost += calculateCost(earnedInBracket, costsArray[i-1]);
                break;
            } else {
                const bracketWidth = bracketArray[i] - bracketArray[i - 1];
                runningCost += calculateCost(bracketWidth, costsArray[i-1]);
            }
            i++;
        }

        // If income is greater than the highest tax bracket, add the difference
        if (grossIncome > bracketArray[i-1]) {
            const earnedAtMax = grossIncome - bracketArray[i-1];
            runningCost += calculateCost(earnedAtMax, costsArray[i-1]);
        }

        return parseFloat(runningCost.toFixed(2));
    }

    const calculateNetIncome = (grossIncome) => {
        let taxCost = calculateTaxCost(grossIncome, taxBrackets, taxAmounts);
        let ninoCost = calculateTaxCost(grossIncome, ninoBrackets, ninoAmounts);

        const totalCost = taxCost + ninoCost;
        return grossIncome - totalCost;
    }

    return {
        calculateNetIncome,
    }
}