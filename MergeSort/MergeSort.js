function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle)
    const right = array.slice(middle);

    const leftSorted = mergeSort(left.slice());
    const rightSorted = mergeSort(right.slice());

    return merge(leftSorted, rightSorted)
    
}

function merge(left, right) {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    if (!Array.isArray(left) || !Array.isArray(right)) {
        throw new Error('merge() recebeu argumentos que não são arrays');
    }

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    return merged;
}

const array = [8, 1, 6, 1, 4, 5, 0, 2]  
