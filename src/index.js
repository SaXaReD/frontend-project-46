import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import buildTree from './genDiff.js';
import format from './formater/index.js';

const extractFormat = (filePath) => filePath.split('.').at(-1);

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(fullPath, 'utf-8');
};

const getData = (filePath) => {
  const fileData = readFile(filePath);
  return parse(fileData, extractFormat(filePath));
};

export default (filePath1, filePath2, outputFormat = 'stylish') => {
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);

  const diff = buildTree(data1, data2);
  return format(diff, outputFormat);
};
