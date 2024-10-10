import _ from 'lodash';

const getSortedKeys = (data1, data2) => {
  const dataKeys1 = Object.keys(data1);
  const dataKeys2 = Object.keys(data2);

  const arrayOfKeys = [...new Set([...dataKeys1, ...dataKeys2])];

  return arrayOfKeys.toSorted();
};

const diffTree = (data1, data2) => getSortedKeys(data1, data2).map((key) => {
  const value1 = data1[key];
  const value2 = data2[key];

  if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
    return { key, value1, status: 'deleted' };
  }

  if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
    return { key, value2, status: 'added' };
  }

  if (_.isEqual(value1, value2)) {
    return { key, value1, status: 'unchanged' };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { key, children: diffTree(value1, value2), status: 'nested' };
  }

  return {
    key, value1, value2, status: 'changed',
  };
});

export default diffTree;
