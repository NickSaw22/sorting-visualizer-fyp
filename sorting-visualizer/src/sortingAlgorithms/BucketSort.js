export function getBuckerSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    bucketSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function bucketSort(arr, animations) {
    let n=arr.length;
    if (n <= 0)
        return;

    let buckets = new Array(n);

    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < n; i++) {
        let idx = arr[i] * n;
        buckets[Math.floor(idx)].push(arr[i]);
    }

    for (let i = 0; i < n; i++) {
        buckets[i].sort(function (a, b) { return a - b; });
    }


    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}