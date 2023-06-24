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
        <input
            type="text"
            value={displayedValue}
            onChange={handleInputChange}
            placeholder="Enter salary amount"
        />
    )
}

export default SalaryForm