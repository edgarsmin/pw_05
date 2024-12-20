import { generateEstonianId, generateLatvianId, generateLithuanianId } from '../src/CountryCodeGenerator';

describe('Country Code Generators', () => {
    test('generateEstonianId generates a code with correct prefix and format', () => {
        const code = generateEstonianId();
        expect(code.startsWith('EST-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/EST-\d{4}/.test(code)).toBe(true);
    });

    test('generateLatvianId generates a code with correct prefix and format', () => {
        const code = generateLatvianId();
        expect(code.startsWith('LVA-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/LVA-\d{4}/.test(code)).toBe(true);
    });

    test('generateLithuanianId generates a code with correct prefix and format', () => {
        const code = generateLithuanianId();
        expect(code.startsWith('LTU-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/LTU-\d{4}/.test(code)).toBe(true);
    });
});