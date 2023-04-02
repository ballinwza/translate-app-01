import Style from '@/styles/History.module.scss'

const History = ({historyList, setHistoryList}) =>{

    const handleDeleteHistory = (index) =>{
        const newHistoryList = [...historyList]
        newHistoryList.splice(index, 1)
        setHistoryList(newHistoryList)
    }

    return(
        <div className={Style.mainContainer}>
            

            <div className={Style.clearContainer}>
                <div>
                    <h1>History</h1>
                </div>
                
                <div className={Style.clearBtn}>
                    <span onClick={()=>setHistoryList([])}>Clear all history</span>
                </div>
            </div>


                {historyList && 
                    historyList.map((item,index)=>{
                        return(
                            <div className={Style.translatorContainer} key={index}>
                                <div>
                                    <div><span className={Style.started}>{item.inputLanguage}</span> - <span className={Style.target}>{item.outputLanguage}</span></div>
                                    <div className={`${Style.deleteBtn} btn`} onClick={()=>handleDeleteHistory(index)}>Delete</div> 
                                </div>
                                <div>
                                    <div className={Style.started}>Started : {item.inputText} </div>
                                    <div className={Style.target}>Target : {item.outputText}</div>
                                </div>
                            </div>
                        )
                    })
                }

        </div>
    )
}

export default History