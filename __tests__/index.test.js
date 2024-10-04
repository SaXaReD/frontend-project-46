import gendiff from '../src/index.js';
import { finalDiff, plainDiff, jsonDiff } from '../__fixtures__/expected.js';

test('gendiff JSON', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(finalDiff);
});

test('gendiff YAML', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(finalDiff);
});

test('gendiff YML', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(finalDiff);
});

test('plain diff', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(plainDiff);
});

test('json diff', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(jsonDiff);
});
