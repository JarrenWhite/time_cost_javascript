import SalaryForm from "./SalaryForm.jsx";
import FrequencyForm from "./FrequencyForm.jsx";
import HoursForm from "./HoursForm.jsx";

function WageForm({
                      salary,
                      changeSalary,
                      payFrequency,
                      changePayFrequency,
                      hours,
                      changeHours,
                      hourFrequency,
                      changeHourFrequency
                  }) {
    return (
        <div>
            <SalaryForm salary={salary} changeSalary={changeSalary}/>
            <FrequencyForm frequency={payFrequency} changeFrequency={changePayFrequency}/>
            <HoursForm hours={hours} changeHours={changeHours}/>
            <FrequencyForm frequency={hourFrequency} changeFrequency={changeHourFrequency}/>
        </div>
    )
}

export default WageForm