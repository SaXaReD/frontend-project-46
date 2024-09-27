import yaml from 'yaml';

export default (dataForParse, fileExtension) => {
  switch (fileExtension) {
    case 'yml':
      return yaml.parse(dataForParse);
    case 'yaml':
      return yaml.parse(dataForParse);
    default:
      return JSON.parse(dataForParse);
  }
};
