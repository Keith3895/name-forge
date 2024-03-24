import { dict } from './dict';
const countriesSupported = {
    argentine: 'AR',
    austrian: 'AT',
    belgium: 'BE',
    brazilian: 'BR',
    czech: 'CZ',
    german: 'DE',
    danish: 'DK',
    spanish: 'ES',
    finnish: 'FI',
    french: 'FR',
    british: 'GB',
    indonesian: 'ID',
    indian: 'IN',
    italian: 'IT',
    mexican: 'MX',
    dutch: 'NL',
    norwegian: 'NO',
    polish: 'PL',
    american: 'US'
};
const isoCodes = Object.values(countriesSupported);

const isoIndexMap = isoCodes.reduce((acc: { [key: string]: number }, iso, index) => {
    acc[iso] = index;
    return acc;
}, {});
// console.log(isoIndexMap);


export const firstName = (countryCode: string, gender?: string) => {
    _validateParams(countryCode,gender);
    const IndexMap = isoIndexMap[countryCode];
    const genderIndex = gender === 'M' ? 0 : 1;
    const name = dict[IndexMap][genderIndex][Math.floor(Math.random() * dict[IndexMap][genderIndex].length)];
    return name;
}
export const surname = (countryCode: string, gender?: string) => {
    _validateParams(countryCode,gender);
    const IndexMap = isoIndexMap[countryCode];
    // const
    if (countryCode === 'CZ' || countryCode === 'PL') {
        const genderIndex = gender === 'M' ? 0 : 1;
        const name = dict[IndexMap][2][genderIndex][Math.floor(Math.random() * dict[IndexMap][2][genderIndex].length)];
        return name;
    } else {
        const name = dict[IndexMap][2][Math.floor(Math.random() * dict[IndexMap][2].length)];
        return name;
    }
};

const _validateParams = (countryCode: string, gender?: string) => {
    if (!isoCodes.includes(countryCode)) {
        throw new Error(`Country code [${countryCode}] not supported.`);
    }else{
        if(!gender){
            console.warn("gender is not provided. Defaulting to 'F' - Female");
        }
    }
}