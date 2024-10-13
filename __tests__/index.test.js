import { fileURLToPath } from 'url';
import
path,
{ dirname }
  from 'path';
import fs from 'node:fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const expectedStylish = readFile('stylishExpected.txt');
const expectedPlain = readFile('plainExpected.txt');
const expectedJson = readFile('jsonExpected.txt');

describe('gendiff', () => {
  test('Input JSON', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    expect(gendiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  });

  test('Input YML', () => {
    const filePath1 = getFixturePath('file1.yml');
    const filePath2 = getFixturePath('file2.yml');
    expect(gendiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  });

  test('Input YAML', () => {
    const filePath1 = getFixturePath('file1.yaml');
    const filePath2 = getFixturePath('file2.yaml');
    expect(gendiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  });
});

describe('errors', () => {
  test('Error in Format', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    expect(() => gendiff(filePath1, filePath2, 'format')).toThrow('Unknown format: format');
  });

  test('Error in File Extention', () => {
    const filePath = getFixturePath('file.txt');
    expect(() => gendiff(filePath, filePath)).toThrow('Invalid format: txt');
  });
});
