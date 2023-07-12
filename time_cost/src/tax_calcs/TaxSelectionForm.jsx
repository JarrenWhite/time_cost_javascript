import TaxToggleBox from "./TaxToggleBox.jsx";

function TaxSelectionForm({predictTax, changePredictTax}) {

    return (
        <div className={'predict-tax-form-bar'}>
            <label className={'predict-phrase'}>Use tax predictions?</label>
            <TaxToggleBox className={'toggle-box'} predictTax={predictTax} changePredictTax={changePredictTax} />
        </div>
    )
}

export default TaxSelectionForm