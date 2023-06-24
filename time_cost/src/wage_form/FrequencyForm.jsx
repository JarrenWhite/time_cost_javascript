function FrequencyForm({frequency, changeFrequency}){
    const handleOptionChange = (event) => {
        changeFrequency(event.target.value);
    };

    return(
        <div>
            <select value={frequency} onChange={handleOptionChange}>
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
                <option value="Four Weeks">Four Weeks</option>
            </select>
        </div>
    )
}

export default FrequencyForm