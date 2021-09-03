import React from 'react';

import { getMergeSortAnimations } from '../sortingAlgorithms/MergeSort';
import { getHeapSortAnimations } from '../sortingAlgorithms/HeapSort';
import { getQuickSortAnimations } from '../sortingAlgorithms/QuickSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/InsertionSort';
import { getShellSortAnimations } from '../sortingAlgorithms/ShellSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/SelectionSort';
import { getBubbleSortAnimations } from '../sortingAlgorithms/BubbleSort';
import { getCycleSortAnimations } from '../sortingAlgorithms/CycleSort';
import { getCountingSortAnimations } from '../sortingAlgorithms/CountingSort';
import { getRadixSortAnimations } from '../sortingAlgorithms/RadixSort';
import { getBucketSortAnimations } from '../sortingAlgorithms/BucketSort';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 5;

const NUMBER_OF_ARRAY_BARS = 100;

const PRIMARY_COLOR = 'pink';

const SECONDARY_COLOR = 'purple';

const algorithms = {
  "mergeSort": getMergeSortAnimations,
  "insertionSort": getInsertionSortAnimations,
  "quickSort": getQuickSortAnimations,
  "selectionSort": getSelectionSortAnimations,
  "bubbleSort": getBubbleSortAnimations,
  "heapSort": getHeapSortAnimations,
  "cycleSort": getCycleSortAnimations,
  "shellSort": getShellSortAnimations,
  "radixSort": getRadixSortAnimations,
  "bucketSort": getBucketSortAnimations,
  "countingSort": getCountingSortAnimations
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    this.setState({ array });
  }

  disableSortButtons() {
    document.getElementById("generateNewArray").disabled = true;
    document.getElementById("mergeSort").disabled = true;
    document.getElementById("quickSort").disabled = true;
    document.getElementById("heapSort").disabled = true;
    document.getElementById("insertionSort").disabled = true;
    document.getElementById("selectionSort").disabled = true;
    document.getElementById("bubbleSort").disabled = true;
    document.getElementById("shellSort").disabled = true;
    document.getElementById("cycleSort").disabled = true;
    document.getElementById("countingSort").disabled = true;
    document.getElementById("bucketSort").disabled = true;
    document.getElementById("radixSort").disabled = true;
  }

  restoreStoreButtons() {
    document.getElementById("generateNewArray").disabled = false;
    document.getElementById("mergeSort").disabled = false;
    document.getElementById("quickSort").disabled = false;
    document.getElementById("heapSort").disabled = false;
    document.getElementById("bubbleSort").disabled = false;
    document.getElementById("selectionSort").disabled = false;
    document.getElementById("cycleSort").disabled = false;
    document.getElementById("bucketSort").disabled = false;
    document.getElementById("countingSort").disabled = false;
    document.getElementById("radixSort").disabled = false;
    document.getElementById("shellSort").disabled = false;
    document.getElementById("insertionSort").disabled = false;
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  bktsort(algorithmName) {
    this.disableSortButtons();
    const [animations, sortArray] = algorithms[algorithmName](this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => this.restoreStoreButtons(), (animations.length - 1) * ANIMATION_SPEED_MS);
  }


  sort(algorithmName) {
    this.disableSortButtons();
    const [animations, sortArray] = algorithms[algorithmName](this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => this.restoreStoreButtons(), (animations.length - 1) * ANIMATION_SPEED_MS);
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>//{value} to check if algorithm is working or not 
        ))}


        <button id="generateNewArray" style={{ marginRight: '8px' }} onClick={() => this.resetArray()}>Generate New Array</button>
        <button id="mergeSort" style={{ marginRight: '8px' }} onClick={() => this.sort('mergeSort')}>Merge Sort</button>
        <button id="quickSort" style={{ marginRight: '8px' }} onClick={() => this.sort('quickSort')}>Quick Sort</button>
        <button id="heapSort" style={{ marginRight: '8px' }} onClick={() => this.sort('heapSort')}>Heap Sort</button>
        <button id="bubbleSort" style={{ marginRight: '8px' }} onClick={() => this.sort('bubbleSort')}>Bubble Sort</button>
        <button id="insertionSort" style={{ marginRight: '8px' }} onClick={() => this.sort('insertionSort')}>Insertion Sort</button>
        <button id="selectionSort" style={{ marginRight: '8px' }} onClick={() => this.sort('selectionSort')}>Selection Sort</button>
        <button id="shellSort" style={{ marginRight: '8px' }} onClick={() => this.sort('shellSort')}>Shell Sort</button>
        <button id="cycleSort" style={{ marginRight: '8px' }} onClick={() => this.sort('cycleSort')}>Cycle Sort</button>

        {/*this algos below does not compare array elements hence declared different function bktsort() 
        also it requires extra array so need to work on it but the animation works fine*/}
        
        <button id="countingSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('countingSort')}>Counting Sort</button>
        <button id="radixSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('radixSort')}>Radix Sort</button>
        <button id="bucketSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('bucketSort')}>Bucket Sort</button>
      </div>

    );

  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}