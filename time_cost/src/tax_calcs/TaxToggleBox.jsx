import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function TaxToggleBox ({predictTax, changePredictTax}) {

    const handleToggle = () => {
        changePredictTax();
    };

    return (
        <BootstrapSwitchButton
            checked={predictTax}
            onlabel='On'
            offlabel='Off'
            onChange={handleToggle}
        />
    );
}

export default TaxToggleBox