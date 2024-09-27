import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const arrayOfKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  return arrayOfKeys;
};

export default (obj1, obj2) => {
  let result = '{';
  getSortedKeys(obj1, obj2).forEach((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      result = `${result}\n  - ${key}: ${value1}`;
    } else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      result = `${result}\n  + ${key}: ${value2}`;
    } else if (_.isEqual(value1, value2)) {
      result = `${result}\n    ${key}: ${value1}`;
    } else {
      result = `${result}\n  - ${key}: ${value1}\n  + ${key}: ${value2}`
    }
  });
  result = `${result}\n}`
  return result;
};
