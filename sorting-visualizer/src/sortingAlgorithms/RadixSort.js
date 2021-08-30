export function getRadixSortAnimations(array){
    let animations = [];
    let auxillaryArray = array.slice();
    radixSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}


// Radix sort Javascript implementation

// A utility function to get maximum value in arr[]
function getMax(arr,n)
{
	let mx = arr[0];
		for (let i = 1; i < n; i++)
			if (arr[i] > mx)
				mx = arr[i];
		return mx;
}

// A function to do counting sort of arr[] according to
	// the digit represented by exp.
function countSort(arr, n, exp, animations)
{
	let output = new Array(n); // output array
		let i;
		let count = new Array(10);
		for(let i=0;i<10;i++)
			count[i]=0;

		// Store count of occurrences in count[]
		for (i = 0; i < n; i++){
            animations.push(["comparision1", i]);
            animations.push(["comparision2", i]);
			//animations.push(i);
            count[Math.floor(arr[i] / exp) % 10]++;
        }
		// Change count[i] so that count[i] now contains
		// actual position of this digit in output[]
		for (i = 1; i < 10; i++)
			count[i] += count[i - 1];

		// Build the output array
		for (i = n - 1; i >= 0; i--) {
            animations.push(["comparision1", i]);
            animations.push(["comparision2", i]);
            animations.push(["overwrite", count[Math.floor(arr[i] / exp) % 10] - 1, arr[i]]);
            //animations.push(i)
			output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
			count[Math.floor(arr[i] / exp) % 10]--;
		}

		// Copy the output array to arr[], so that arr[] now
		// contains sorted numbers according to current digit
		for (i = 0; i < n; i++)
			arr[i] = output[i];
}

// The main function to that sorts arr[] of size n using
	// Radix Sort
function radixSort(arr, animations)
{
    let n=arr.length;
	// Find the maximum number to know number of digits
		let m = getMax(arr, n);

		// Do counting sort for every digit. Note that
		// instead of passing digit number, exp is passed.
		// exp is 10^i where i is current digit number
		for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
			countSort(arr, n, exp, animations);
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
