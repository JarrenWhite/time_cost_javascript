import {Form} from "react-bootstrap";
import React from "react";

function FrequencyForm({frequency, changeFrequency}){
    const handleOptionChange = (event) => {
        changeFrequency(event.target.value);
    };

    return(
        <Form.Group className={'frequency-form-input'}>
            <Form.Control className="form-select form-select-override" as="select" value={frequency} onChange={handleOptionChange}>
                <option value="Hour">Hour</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
                <option value="Four Weeks">Four Weeks</option>
            </Form.Control>
        </Form.Group>
    )
}

export default FrequencyForm