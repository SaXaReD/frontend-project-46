import yaml from 'yaml';

export default (data, format) => {
  switch (format) {
    case 'yml':
      return yaml.parse(data);
    case 'yaml':
      return yaml.parse(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};
