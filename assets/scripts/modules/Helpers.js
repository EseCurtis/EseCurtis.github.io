export const _e = (query, multiple = false) => {
    const element = document.querySelectorAll(query)
    if (multiple) return element
    return element[0]
}

export const chunkArray = (array, chunkSize) => {
    const itemsPerArray = Math.round(array.length / chunkSize);
    const chunkedArray = [[]];

    for (let i = 0; i < chunkSize; i++) {
        const sliceStart = i * itemsPerArray;
        const sliceStop = ((i + 1) * itemsPerArray);
        chunkedArray[i] = array.slice(sliceStart, sliceStop)
    }

    return chunkedArray
};


export const ToNode = (str) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.firstChild;
}