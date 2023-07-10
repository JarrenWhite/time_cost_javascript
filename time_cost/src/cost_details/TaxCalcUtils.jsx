const taxBrackets = [0, 12570, 50270, 125140]
const taxAmounts = [0, 20, 40, 45]

const ninoBrackets = [0, 175]
const ninoAmounts = [0, 13.8]

export function TaxCalcUtils() {

    // Given an amount of money & a rate of tax, calculate amount kept
    const calculateTax = (amount, taxRate) => {
        const keepRate = (100-taxRate) / 100;
        return amount * keepRate;
    }

    const calculateNetIncome = (grossIncome) => {
        let netIncome = 0;
        let i = 1;

        // Calculate net income from each bracket
        while (i < taxBrackets.length) {
            if (grossIncome <= taxBrackets[i]) {
                const earnedInBracket = grossIncome - taxBrackets[i-1]
                netIncome += calculateTax(earnedInBracket, taxAmounts[i-1]);
                break;
            } else {
                const bracketWidth = taxBrackets[i] - taxBrackets[i - 1];
                netIncome += calculateTax(bracketWidth, taxAmounts[i-1]);
            }
            i++;
        }

        // If income is greater than the highest bracket, add the difference
        if (grossIncome > taxBrackets[i-1]) {
            const earnedAtMax = grossIncome - taxBrackets[i-1]
            netIncome += calculateTax(earnedAtMax, taxAmounts[i-1]);
        }

        return netIncome;
    }

    return {
        calculateNetIncome,
    }

}