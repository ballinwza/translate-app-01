import axios from 'axios';

export const getLanguage = async (setParam) => {
    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': env.RapidAPI-Key,
            'X-RapidAPI-Host': env.RapidAPI-Host
        }
    }

    await axios.request(options).then(function (response) {
        const arrayOfData = response.data.data.languages.map(item => item.language)
        const filterData = arrayOfData.filter(item => item == 'th' || item == 'en' || item == 'es')
        setParam(filterData)
    }).catch(function (error) {
        console.error("Error : getting some trobles")
    });
}

export const getTranslator = async (outputLanguage, inputLanguage, textToTranslate, setTranslatedText) =>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", textToTranslate);
    encodedParams.append("target", outputLanguage);
    encodedParams.append("source", inputLanguage);

    const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': env.RapidAPI-Key,
        'X-RapidAPI-Host': env.RapidAPI-Host
    },
        data: encodedParams
    };

    await axios.request(options).then(function (response) {
        setTranslatedText(response.data.data.translations[0].translatedText)
    }).catch(function (error) {
        console.error('Error : getting some trobles');
    });
}
