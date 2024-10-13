import _ from 'lodash';

const getValue = (value) => {
  if (typeof value === 'string') return `'${value}'`;
  return (_.isObject(value)) ? '[complex value]' : String(value);
};

export default (tree) => {
  const iter = (obj, pathToObj) => {
    const result = obj.flatMap((node) => {
      const {
        key, children, type, value, value1, value2,
      } = node;
      const pathToNode = (pathToObj === '') ? `${key}` : `${pathToObj}.${key}`;

      switch (type) {
        case 'deleted':
          return `Property '${pathToNode}' was removed`;

        case 'added':
          return `Property '${pathToNode}' was added with value: ${getValue(value)}`;

        case 'nested':
          return iter(children, pathToNode);

        case 'changed':
          return `Property '${pathToNode}' was updated. From ${getValue(value1)} to ${getValue(value2)}`;

        case 'unchanged':
          return [];

        default:
          throw new Error(`Unknown type: ${type}.`);
      }
    });
    return result.join('\n');
  };
  return iter(tree, '');
};
