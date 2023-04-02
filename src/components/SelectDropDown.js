import Style from '@/styles/SelectDropDown.module.scss'

const SelectDropDown = ({selectedLanguage, type, setShowModal}) => {
    return(
        <div className={Style.selectDropdownContainer} onClick={() => setShowModal(type)}>
            <input className={`${type}-dropdown`} value={selectedLanguage} onChange={(e)=>e.target.value} disabled/>
            <div className={Style.downArrow}>
                <svg
                    focusable='false'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 25"
                >
                    <path d="M7 10l5 5 5-5z"></path>
                </svg>
            </div>

        </div>
    )
}

export default SelectDropDown