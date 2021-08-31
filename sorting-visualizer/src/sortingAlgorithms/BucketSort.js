export function getBucketSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();  //possible error
    bucketSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function bucketSort(arr, animations) {

    console.log(arr);
    let n = arr.length;
    let k = n; 
    //here length of the bucket depends on the no. of inputs that have been considered, here the we have no. of array bars = 100 
    //the index of this elements are calculated using standard formula

    if (n <= 0)
        return;
    let max_val = arr[0];
    for (let i = 1; i < n; i++) {
        max_val = Math.max(max_val, arr[i]);
    }
    max_val += 1;

    let buckets = new Array(k);
    console.log(buckets.length);

    for (let i = 0; i < k; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < n; i++) {

        //console.log('Iterations: ' + i);
        animations.push(["comparision1", i]);
        animations.push(["comparision2", i]);
        let bucketIndex = Math.floor((k*arr[i])/max_val);
        //console.log(buckets[bucketIndex]); //undefined
        //console.log(arr[i]); // working fine
        //(buckets[bucketIndex] || (buckets[bucketIndex] = [])).push(arr[i]);  //possible error may be buckets[bucketIndex] 
        buckets[bucketIndex].push(arr[i]);
        console.log('Bucket of'+bucketIndex+' '+buckets[bucketIndex]);
        console.log('Bucket of'+bucketIndex+' length '+buckets[bucketIndex].length);
    }

    for (let i = 0; i < k; i++) {
        buckets[i].sort(function (a, b) { return a - b; }); 
        console.log('Bucket of'+i+' '+buckets[i]);
        console.log('Bucket of'+i+' length '+buckets[i].length);
    }


    let index = 0;
    for (let i = 0; i < n; i++) {
        //console.log('Iterations: ' + i);
        for (let j = 0; j < buckets[i].length; j++) {
            animations.push(["comparision1", index]);
            animations.push(["comparision2", index]);
            animations.push(["overwrite", index, buckets[i][j]]);
            arr[index] = buckets[i][j];
            //console.log('Arr['+index+']' + arr[index]);
            index++;
        }
    }
    //console.log(arr);
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