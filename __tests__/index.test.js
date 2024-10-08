import { fileURLToPath } from 'url';
import
path,
{ dirname }
  from 'path';
import fs from 'node:fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  test('Input JSON', () => {
    expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('plainExpected.txt'));
    expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(readFile('jsonExpected.txt'));
  });

  test('Input YML', () => {
    expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(readFile('plainExpected.txt'));
    expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(readFile('jsonExpected.txt'));
  });

  test('Input YAML', () => {
    expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish')).toEqual(readFile('stylishExpected.txt'));
    expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(readFile('plainExpected.txt'));
    expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toEqual(readFile('jsonExpected.txt'));
  });
});
