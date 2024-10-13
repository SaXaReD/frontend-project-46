import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return getPlain(data);
    case 'json':
      return getJson(data);
    case 'stylish':
      return getStylish(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
