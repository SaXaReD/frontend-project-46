import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const arrayOfKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  return arrayOfKeys;
};

const genDiff = (obj1, obj2) => getSortedKeys(obj1, obj2).map((key) => {
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
    return { key, value1, status: 'deleted' };
  }

  if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
    return { key, value2, status: 'added' };
  }

  if (_.isEqual(value1, value2)) {
    return { key, value1, status: 'unchanged' };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { key, children: genDiff(value1, value2), status: 'nested' };
  }

  return {
    key, value1, value2, status: 'changed',
  };
});

export default genDiff;
