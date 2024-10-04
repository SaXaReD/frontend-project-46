import getStylish from './stylish.js';

export default (data, format) => {
  switch (format) {
    default:
      return getStylish(data);
  }
};
