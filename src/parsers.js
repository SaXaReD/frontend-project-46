
export default (dataForParse, fileExtension) => {
    switch (fileExtension) {
        case 'json':
            return JSON.parse(dataForParse);
        default:
            return JSON.parse(dataForParse);
    }
}