import path from 'path';
import fs from 'fs';
import parseData from './parsers.js';
import genDiff from './genDiff.js';
import getFormat from './formater/index.js';

const getFileExtension = (filePath) => filePath.split('.').at(-1);
const getDataForParse = (filePath) => fs.readFileSync(path.resolve(filePath), 'utf-8');

export default (firstObjPath, secondObjPath, format) => {
  const firstObjExt = getFileExtension(firstObjPath);
  const firstObjData = getDataForParse(firstObjPath);
  const parseDataFirstObj = parseData(firstObjData, firstObjExt);

  const secondObjExt = getFileExtension(secondObjPath);
  const secondObjData = getDataForParse(secondObjPath);
  const parseDataSecondObj = parseData(secondObjData, secondObjExt);
  const result = genDiff(parseDataFirstObj, parseDataSecondObj);
  return getFormat(result, format);
};
