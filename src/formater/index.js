import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return getPlain(data);

    case 'json':
      return getJson(data);

    default:
      return getStylish(data);
  }
};
