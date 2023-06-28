import {Form, InputGroup} from "react-bootstrap";
import React from "react";

function SalaryForm({salary, changeSalary}) {

    const salaryRegex = /^\d+(\.\d{0,2})?$/;

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace('£', '');

        if (inputValue === '' || salaryRegex.test(inputValue)) {
            changeSalary(inputValue);
        }
    }

    // If salary empty, show nothing, else show £ as prefix
    const displayedValue = salary === '' ? '' : '£' + salary

    return(
        <Form.Group>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={displayedValue}
                    onChange={handleInputChange}
                    placeholder="Enter Salary Amount"
                />
            </InputGroup>
        </Form.Group>
    )
}

export default SalaryForm