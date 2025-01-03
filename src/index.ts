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
    american: 'US',
    egyptian: 'EG',
    japanese: 'JP',
    bolivian: 'BO',
    kenyan: 'KE',
    somali: 'SO'
};
const isoCodes = Object.values(countriesSupported);

const isoIndexMap = isoCodes.reduce((acc: { [key: string]: number }, iso, index) => {
    acc[iso] = index;
    return acc;
}, {});
// console.log(isoIndexMap);

/**
 * Function to generate first name
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @param gender - 'M' or 'F'
 * @returns - First name
 */
export const firstName = (countryCode: string, gender?: string) => {
    _validateParams(countryCode, gender);
    const IndexMap = isoIndexMap[countryCode];
    const genderIndex = gender === 'M' ? 0 : 1;
    const name = dict[IndexMap][genderIndex][Math.floor(Math.random() * dict[IndexMap][genderIndex].length)];
    return name;
}
/**
 * Function to generate surname
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @param gender - 'M' or 'F'
 * @returns - Surname
 */
export const surname = (countryCode: string, gender?: string) => {
    _validateParams(countryCode, gender);
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
/**
 * Function to generate full name
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @param gender - 'M' or 'F'
 * @returns - Full name
 */
export const fullName = (countryCode: string, gender?: string) => {
    const name = firstName(countryCode, gender);
    const surnameName = surname(countryCode, gender);

    // Somali names are traditionally composed of three parts: the given name, the father’s name, and the grandfather’s name.
    if (countryCode === 'SO') {
        const grandSurname = surname(countryCode, gender)
        return `${name} ${surnameName} ${grandSurname}`;
    }

    return `${name} ${surnameName}`;
};

const _validateParams = (countryCode: string, gender?: string) => {
    if (!isoCodes.includes(countryCode)) {
        throw new Error(`Country code [${countryCode}] not supported.`);
    } else {
        if (!gender) {
            console.warn("gender is not provided. Defaulting to 'F' - Female");
        } else if (gender !== 'M' && gender !== 'F') {
            throw new Error(`Gender value is invalid. Please provide M | F`);
        }
    }
}
