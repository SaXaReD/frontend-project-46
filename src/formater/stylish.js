import _ from 'lodash';

const ident = (depth, type, spacesCount = 4, replacer = ' ') => {
  switch (type) {
    case 'open':
      return replacer.repeat((depth * spacesCount) - 2);
    case 'close':
      return replacer.repeat((depth * spacesCount) - spacesCount);
    default:
      return new Error(`Incorrect type: ${type}`);
  }
};

const stringify = (data, depth = 1) => {
  if (!_.isPlainObject(data)) {
    return String(data);
  }
  const collection = Object
    .entries(data)
    .map(([key, value]) => `${ident(depth, 'open')}  ${key}: ${stringify(value, depth + 1)}`)
    .join('\n');
  return `{\n${collection}\n${ident(depth, 'close')}}`;
};

const format = (tree, depth = 1) => {
  const buildOutput = tree.flatMap((node) => {
    switch (node.type) {
      case 'deleted':
        return `${ident(depth, 'open')}- ${node.key}: ${stringify(node.value, depth + 1)}`;

      case 'added':
        return `${ident(depth, 'open')}+ ${node.key}: ${stringify(node.value, depth + 1)}`;

      case 'nested':
        return `${ident(depth, 'open')}  ${node.key}: ${format(node.children, depth + 1)}`;

      case 'unchanged':
        return `${ident(depth, 'open')}  ${node.key}: ${stringify(node.value, depth + 1)}`;

      case 'changed':
        return [
          `${ident(depth, 'open')}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
          `${ident(depth, 'open')}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
        ];

      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  })
    .join('\n');

  return `{\n${buildOutput}\n${ident(depth, 'close')}}`;
};

export default format;
