function SalaryForm({salary, changeSalary}) {

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace('£', '');
        const regex = /^\d+(\.\d{0,2})?$/;

        if (inputValue === '' || regex.test(inputValue)) {
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