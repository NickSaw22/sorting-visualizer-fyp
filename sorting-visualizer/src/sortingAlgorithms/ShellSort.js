export function getShellSortAnimations(array){
    let animations  = [];
    let auxillaryArray = array.slice();
    shellSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}
function shellSort(auxillaryArray, animations) {
	let n = auxillaryArray.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = auxillaryArray[i];
			
			let j;
			for (j = i; j >= gap && auxillaryArray[j-gap] > temp; j-=gap)  {
                
                animations.push(["comparision1", j, j-gap]);
                animations.push(["overwrite", j, auxillaryArray[j-gap]]);
				auxillaryArray[j] = auxillaryArray[j-gap];cd
                animations.push(["comparision2", j, j-gap]);
			}
            animations.push(["overwrite", j, temp]);
			auxillaryArray[j] = temp;
		}
	}
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