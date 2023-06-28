import React, {useEffect} from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function CostDisplay({payPerHour, financialCost, setFinancialCost, hoursCost, setHourCost, calculateTimeCost}) {
    const costRegex = /^\d*\.?\d?\d?$/

    // If pay per hour changes, update hour cost
    useEffect(() => {
        hourCostCheck(financialCost);
    }, [payPerHour]);

    // If input changes, update hour cost
    const handleInputChange = (e) => {
        hourCostCheck(e.target.value.replace('£', ''));
    }

    // Update hour cost
    const hourCostCheck = (inputValue) => {
        if (inputValue === '') {
            setFinancialCost(inputValue);
            setHourCost('--:--');
        } else if (costRegex.test(inputValue)) {
            setFinancialCost(inputValue);
            setHourCost(calculateTimeCost(parseFloat(inputValue)));
        }
    }

    // If cost empty, show nothing, else show £ as prefix
    const displayedValue = financialCost === '' ? '' : '£' + financialCost

    return(
        <div>
            <Form.Group>
                <Form.Label>Pay Per Hour: £{payPerHour.toFixed(2)}</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        value={displayedValue}
                        onChange={handleInputChange}
                        placeholder="Enter Item Cost"
                    />
                </InputGroup>
                <Form.Label>Costs {hoursCost} hours of work.</Form.Label>
            </Form.Group>
        </div>
    )
}

export default CostDisplay