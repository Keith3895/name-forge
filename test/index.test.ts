import { describe, expect, test } from '@jest/globals';
import { firstName, surname, fullName } from '../src/index';
import { dict } from '../src/dict';

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

describe('Name Generator', () => {
    test('firstName should return a string', () => {
        const name = firstName('US', 'M');
        expect(typeof name).toBe('string');
    });

    test('firstName should throw an error for unsupported country code', () => {
        expect(() => firstName('XX', 'M')).toThrowError(/Country code \[XX\] not supported./);
    });

    test('surname should return a string', () => {
        const name = surname('US', 'M');
        expect(typeof name).toBe('string');
    });

    test('surname should throw an error for unsupported country code', () => {
        expect(() => surname('XX', 'M')).toThrowError(/Country code \[XX\] not supported./);
    });
    test('test for firstname  country code "AR" and gender M', () => {
        const name = firstName('AR', 'M');
        expect(typeof name).toBe('string');
    });
    test('test for firstname country code "AR" and gender F', () => {
        const name = firstName('AR', 'F');
        expect(typeof name).toBe('string');
    });
    test('test for surname country code "AR" gender M', () => {
        const name = surname('AR', 'M');
        expect(typeof name).toBe('string');
    });
    test('test for surname country code "CZ" gender M', () => {
        const name = surname('CZ', 'M');
        expect(typeof name).toBe('string');
        const ending = name.slice(-1);
        expect(ending).not.toEqual('á');

    });
    test('test for surname country code "CZ" gender F', () => {
        const name = surname('CZ', 'F');
        expect(typeof name).toBe('string');
        const ending = name.slice(-1);
        expect(ending).toEqual('á');


    });
});

describe('surname', () => {
    test('should return a string', () => {
        const result = surname('CZ', 'M');
        expect(typeof result).toBe('string');
    });

    test('should return a surname from the correct country and gender', () => {
        const countryCode = 'CZ';
        const gender = 'M';
        const result = surname(countryCode, gender);
        const indexMap = isoIndexMap[countryCode];
        expect(dict[indexMap][2][0]).toContain(result);
    });

    test('should return a surname from the correct country when gender is not specified', () => {
        const countryCode = 'CZ';
        const result = surname(countryCode);
        const indexMap = isoIndexMap[countryCode];
        expect(dict[indexMap][2][1]).toContain(result);
    });

    test('should throw an error for invalid country code', () => {
        expect(() => surname('INVALID')).toThrow();
    });

    test('should throw an error for invalid gender', () => {
        expect(() => surname('CZ', 'INVALID')).toThrow();
    });
});

describe('fullName', () => {
    test('should return a string', () => {
        const result = fullName('CZ', 'M');
        expect(typeof result).toBe('string');
    });

    test('should return a full name from the correct country and gender', () => {
        const countryCode = 'CZ';
        const gender = 'M';
        const result = fullName(countryCode, gender);
        const indexMap = isoIndexMap[countryCode];
        expect(typeof result).toBe('string');
    });

    test('should return correct Somali full name', () => {
        const countryCode = 'SO';
        const gender = 'M';
        const result = fullName(countryCode, gender);
        const indexMap = isoIndexMap[countryCode];
        const nameSplit = result.split(' ')
        expect(nameSplit).toHaveLength(3)
        expect(dict[indexMap][0]).toContain(nameSplit[0]);
        expect(dict[indexMap][2]).toContain(nameSplit[1]);
        expect(dict[indexMap][2]).toContain(nameSplit[2]);
    });

    test('should return a full name from the correct country when gender is not specified', () => {
        const countryCode = 'CZ';
        const result = fullName(countryCode);
        expect(typeof result).toBe('string');
    });

    test('should throw an error for invalid country code', () => {
        expect(() => fullName('INVALID')).toThrow();
    });

    test('should throw an error for invalid gender', () => {
        expect(() => fullName('CZ', 'INVALID')).toThrow();
    });
});
