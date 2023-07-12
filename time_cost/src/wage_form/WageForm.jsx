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
                      changeHourFrequency,
                  }) {
    return (
        <div>
            <SalaryForm salary={salary} changeSalary={changeSalary}/>
            <div className={'frequency-form-bar'}>
                <label className={'per-phrase'}>per</label>
                <FrequencyForm frequency={payFrequency} changeFrequency={changePayFrequency} allowHours={true}/>
            </div>
            <HoursForm hours={hours} changeHours={changeHours}/>
            <div className={'frequency-form-bar'}>
                <label className={'per-phrase'}>per</label>
                <FrequencyForm frequency={hourFrequency} changeFrequency={changeHourFrequency} allowHours={false}/>
            </div>
        </div>
    )
}

export default WageForm