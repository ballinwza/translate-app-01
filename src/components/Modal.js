import { useState } from "react"
import Style from '@/styles/Modal.module.scss';

const Modal = ({setShowModal, languages, setChosenLanguage, chosenLanguage}) =>{
    const [searchLang, setSearchLang] = useState('')

    const fullCountryName = languages.map((item,index)=>{
        if(item == 'th'){
            return 'Thai'
        }if(item == 'es'){
            return 'Spainish'
        }if(item == 'en'){
            return 'English'
        }
    })

    const chooseLang = fullCountryName.filter(item => item.toLowerCase().startsWith(searchLang.toLowerCase()))

    const handleChange = (e) =>{
        setSearchLang(e.target.value)
    }

    const handleClick = (e) =>{
        setChosenLanguage(e.target.textContent)
        setShowModal(null)
    }


    return(
        <div className={Style.optionContainer}>
            <div className={Style.searchBar}>
                <input value={searchLang} onChange={handleChange} autoFocus/>
                <div className={Style.closeBtn} onClick={()=>setShowModal(null)}>
                    <svg
                        focusable='false'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className={Style.optionList}>
                <ul>
                    {chooseLang?.map((item, index)=>{
                        return(
                            <div className={Style.listItem} key={index}>
                                <div className={`${Style.listItemContainer} ${chosenLanguage===item? Style.chosen:''}`}>
                                    <div className={Style.icon}>
                                        {chosenLanguage === item ? '✓' : ''}
                                    </div>
                                    <li onClick={handleClick}>{item}</li>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Modal