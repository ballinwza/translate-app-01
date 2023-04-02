import { useState } from "react"
import SelectDropDown from "./SelectDropDown"
import TextBoxStyle from '@/styles/Textbox.module.scss'

const Textbox = ({type, selectedLanguage, setShowModal, textToTranslate, setTextToTranslate, translatedText, setTranslatedText}) =>{
    const [textCount, setTextCount] = useState('')

    const checkPalindrome = (str) =>{
        const checkEn = /[^A-Za-z]/; 
        const checkTh = /[^ก-๛]/;

        const filterLang = (value, regEx) =>{
            const lowReg = value.toLowerCase().replace(regEx, '');
            const reverseValue = lowReg.split('').reverse().join(''); 
            return reverseValue === lowReg
        }

        if(str.length>2 && str.length!=0){
            if(str == str.toLowerCase().replace(checkTh, '')){
                return filterLang(str,checkTh)
            }if(str == str.toLowerCase().replace(checkEn, '')){
                return filterLang(str,checkEn)
            }
        }else{
            return false
        }
    }

    const handelClickClear = () =>{
        setTextToTranslate('')
        setTranslatedText('')
        setTextCount('')
    }

    return(
        <div className={TextBoxStyle.textBoxContainer}>
            <SelectDropDown 
                selectedLanguage={selectedLanguage} 
                setShowModal={setShowModal}
                type={type}
            />
            
            <div className={`${TextBoxStyle.textArea} ${type == 'output' ? TextBoxStyle.outputContainer:TextBoxStyle.inputContainer}`}>
                <textarea 
                    className={`${type} ${TextBoxStyle.textBox}`}
                    placeholder={type == 'input'? 'Enter Text':'Translation'}
                    onChange={(e)=> {
                        setTextToTranslate(e.target.value)
                        setTextCount(e.target.value)
                    }}
                    disabled={type == 'output'}
                    value={type=='input' ? textToTranslate : translatedText}
                    maxLength={type == 'input' ? '1000' : 'none'}
                    // onClick={handelClickClear}
                />
                <div className={TextBoxStyle.textCount}>
                    {type == 'input' ? `${checkPalindrome(textCount)?'💕':''} ${textCount.length.toLocaleString('en-US')}/1,000`:''}
                </div>
            </div>

        </div>

        
    )
}

export default Textbox