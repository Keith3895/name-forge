import {describe, expect, test} from '@jest/globals';
import { firstName, surname } from '../src/index';

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
    test('test for firstname  country code "AR" and gender M',()=>{
        const name = firstName('AR', 'M');
        expect(typeof name).toBe('string');
    });
    test('test for firstname country code "AR" and gender F',()=>{
        const name = firstName('AR', 'F');
        expect(typeof name).toBe('string');
    });
    test('test for surname country code "AR" gender M',()=>{
        const name = surname('AR', 'M');
        expect(typeof name).toBe('string');
    });
    test('test for surname country code "CZ" gender M',()=>{
        const name = surname('CZ', 'M');
        expect(typeof name).toBe('string');
        expect(name.slice(-2)).not.toEqual('vá');
    });
    test('test for surname country code "CZ" gender F',()=>{
        const name = surname('CZ', 'F');
        expect(typeof name).toBe('string');
        expect(name.slice(-2)).toEqual('vá');
    });
});