export function getCountingSortAnimations(array){
    let animations = [];
    let auxillaryArray = array.slice();
    countingSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function countingSort(a, animations){
    let count=[];
    const k = 650;
    const n=a.length;
    for(let i=0; i<k; i++)
        count[i]=0;
    for(let i=0; i<n; i++){
        count[a[i]]++;
    }

    let index=0;
    for(let i=0; i<k; i++){
        for(let j=0; j<count[i]; j++){
            animations.push(["comparision1", index]);
            animations.push(["comparision2", index]);
            animations.push(["overwrite", index, i]);
            a[index]=i;
            index++;
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

/*Logic

void countingSort(int a[], int n, int k){
    int count[k];
    for(int i=0; i<k; i++)
        count[i]=0;
    for(int i=0; i<n; i++){
        count[a[i]]++;
    }

    int index=0;
    for(int i=0; i<k; i++){
        for(int j=0; j<count[i]; j++){
            a[index]=i;
            index++;
        }
    }
}


*/
