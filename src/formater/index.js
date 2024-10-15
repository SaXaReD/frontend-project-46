import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return formatPlain(data);
    case 'json':
      return formatJson(data);
    case 'stylish':
      return formatStylish(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
