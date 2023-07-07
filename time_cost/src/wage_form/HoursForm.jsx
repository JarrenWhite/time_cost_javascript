import {Form, InputGroup} from "react-bootstrap";
import React, {useState} from "react";

function HoursForm({hours, changeHours}) {

    const hoursRegexDecimal = /^\d+(\.\d{0,2})?$/;
    const hoursRegexString = /^(\d+):?([0-5]\d?)?$/;

    // let displayedHours = hours;
    const [displayedHours, setDisplayedHours] = useState(hours.toString());

    // Switch hours from human-readable format to decimal form
    const hoursToDecimal = (readableHours) => {
        // If ends with ':', remove and return hours
        if (readableHours.endsWith(':')) {
            return readableHours.split(':')[0];
        }

        // If contains both hours and minutes, split & add as decimals
        const fullHours = readableHours.split(':')[0];
        const minutes = readableHours.split(':')[1];

        // If minutes is one digit
        if (minutes.length === 1) {
            const numericMinutes = Math.round(parseInt(minutes) / 0.06);
            return `${fullHours}.${numericMinutes.toString()}`;
        }

        // Else minutes is two digits
        const numericMinutes = Math.round(parseInt(minutes) / 0.6);
        return `${fullHours}.${numericMinutes.toString()}`;
    }

    // Handle user input
    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        // If empty or decimal input, process as is
        if (inputValue === '' || hoursRegexDecimal.test(inputValue)) {
            changeHours(inputValue);
            setDisplayedHours(inputValue);
        // If string style input, convert to decimal input
        } else if (hoursRegexString.test(inputValue)) {
            changeHours(hoursToDecimal(inputValue));
            setDisplayedHours(inputValue);
        }
    }


    return(
        <Form.Group>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={displayedHours}
                    onChange={handleInputChange}
                    placeholder="Enter Hours Worked"
                />
            </InputGroup>
        </Form.Group>
    )
}

export default HoursForm