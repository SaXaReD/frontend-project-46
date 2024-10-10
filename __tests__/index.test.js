import { fileURLToPath } from 'url';
import
path,
{ dirname }
  from 'path';
import fs from 'node:fs';
import gendiff from '../src/index.js';
import format from '../src/formater/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const filePathJson1 = getFixturePath('file1.json');
const filePathJson2 = getFixturePath('file2.json');
const filePathYml1 = getFixturePath('file1.yml');
const filePathYml2 = getFixturePath('file2.yml');
const filePathYaml1 = getFixturePath('file1.yaml');
const filePathYaml2 = getFixturePath('file2.yaml');
const filePathTxt = getFixturePath('file.txt');

const expectedStylish = readFile('stylishExpected.txt');
const expectedPlain = readFile('plainExpected.txt');
const expectedJson = readFile('jsonExpected.txt');

describe('gendiff', () => {
  test('Input JSON', () => {
    expect(gendiff(filePathJson1, filePathJson2)).toEqual(expectedStylish);
    expect(gendiff(filePathJson1, filePathJson2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePathJson1, filePathJson2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePathJson1, filePathJson2, 'json')).toEqual(expectedJson);
  });

  test('Input YML', () => {
    expect(gendiff(filePathYml1, filePathYml2)).toEqual(expectedStylish);
    expect(gendiff(filePathYml1, filePathYml2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePathYml1, filePathYml2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePathYml1, filePathYml2, 'json')).toEqual(expectedJson);
  });

  test('Input YAML', () => {
    expect(gendiff(filePathYaml1, filePathYaml2)).toEqual(expectedStylish);
    expect(gendiff(filePathYaml1, filePathYaml2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filePathYaml1, filePathYaml2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filePathYaml1, filePathYaml2, 'json')).toEqual(expectedJson);
  });
});

describe('errors', () => {
  test('Error in Format', () => {
    expect(() => format(JSON.parse(expectedJson), 'py')).toThrow('Unknown format: py.');
  });

  test('Error in File Extention', () => {
    expect(() => gendiff(filePathTxt, filePathTxt)).toThrow(('Invalid format: .txt'));
  });
});
