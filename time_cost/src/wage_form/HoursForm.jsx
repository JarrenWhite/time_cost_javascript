import {Form, InputGroup} from "react-bootstrap";
import React from "react";

function HoursForm({hours, changeHours}) {

    const hoursRegex = /^(\d+):?([0-5]\d?)?$/;

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace('.', ':');

        if (inputValue === '' || hoursRegex.test(inputValue)) {
            changeHours(inputValue);
        }
    }

    return(
        <Form.Group>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={hours}
                    onChange={handleInputChange}
                    placeholder="Enter Hours Worked"
                />
            </InputGroup>
        </Form.Group>
    )
}

export default HoursForm