function HoursForm({hours, changeHours}) {

    const hoursRegex = /^(\d+):?([0-5]\d?)?$/;

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace('.', ':');

        if (inputValue === '' || hoursRegex.test(inputValue)) {
            changeHours(inputValue);
        }
    }

    return(
        <input
            type="text"
            value={hours}
            onChange={handleInputChange}
            placeholder="Enter hours amount"
        />
    )
}

export default HoursForm