export function getCycleSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    cycleSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function cycleSort(arr, animations) {
    const n = arr.length;
    // count number of memory writes
    let writes = 0;

    // traverse array elements and put it to on
    // the right place
    for (let cycle_start = 0; cycle_start < n - 1; cycle_start++) {

        // initialize item as starting point
        let item = arr[cycle_start];
        let toswap=cycle_start;
        // Find position where we put the item. We basically
        // count all smaller elements on right side of item.
        let pos = cycle_start;
        for (let i = cycle_start + 1; i < n; i++)
            if (arr[i] < item) {
                animations.push(["comparision1", i, pos]);
                animations.push(["comparision2", i, pos]);
                pos++;
            }

        // If item is already in correct position
        if (pos == cycle_start){
            continue;
        }

        // ignore all duplicate elements
        while (item == arr[pos]){
            pos += 1;
        }

        // put the item to it's right position
        if (pos != cycle_start) {
            //swap a[pos] and item
            /*let temp = item;
            item = arr[pos];
            arr[pos] = temp;*/
            //animations.push(["swap", pos, item]);
            //animations.push(["swap", toswap, arr[pos]]);
            let temp = item;
            item = arr[pos];
            arr[pos] = temp;
            //swap(arr, pos, toswap);
            writes++;
        }
        toswap=pos;/*Something wrong in this loop*/
        // Rotate rest of the cycle
        while (pos != cycle_start) {
            pos = cycle_start;

            // Find position where we put the element
            for (let i = cycle_start + 1; i < n; i++)
                if (arr[i] < item) {
                    animations.push(["comparision1", i, pos]);
                    animations.push(["comparision2", i, pos]);
                    pos += 1;
                }

            // ignore all duplicate elements
            while (item == arr[pos]) {
                pos += 1;
            }

            // put the item to it's right position
            if (item != arr[pos]) {
                //swap a[pos] with item
                /*let temp = item;
                item = arr[pos];
                arr[pos] = temp;*/
                //animations.push(["overwrite", pos, item]);

                /*animations.push(["swap", pos, item]);
                animations.push(["swap", toswap, arr[pos]]);*/
                /*let temp = item;
                item = arr[pos];
                arr[pos] = temp;
                animations.push(["swap", pos, item]);
                animations.push(["swap", toswap, arr[pos]]);*/
                //swap(arr, pos, toswap);
                writes++;
            }
            toswap=pos;
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