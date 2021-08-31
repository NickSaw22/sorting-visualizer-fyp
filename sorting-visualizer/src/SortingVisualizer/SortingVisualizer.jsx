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

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 100;

const PRIMARY_COLOR = 'pink';

const SECONDARY_COLOR = 'purple';

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

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  /*Quick Sort*/
  quickSort() {
    //this.disableSortButtons();
    const [animations, sortArray] = getQuickSortAnimations(this.state.array);
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
  }

  /*Bubble Sort*/
  bubbleSort() {
    //const animations = getBubbleSortAnimations(this.state.array);
    const [animations, sortArray] = getBubbleSortAnimations(this.state.array);
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
  }


  /*Selection Sort*/
  selectionSort() {
    const [animations, sortArray] = getSelectionSortAnimations(this.state.array);
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
  }

  /*Insertion Sort*/
  insertionSort() {
    const [animations, sortArray] = getInsertionSortAnimations(this.state.array);
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
  }

  /*Insertion Sort*/
  shellSort() {
    const [animations, sortArray] = getShellSortAnimations(this.state.array);
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
  }

  /*Heap Sort*/
  heapSort() {
    //this.disableSortButtons();
    const [animations, sortArray] = getHeapSortAnimations(this.state.array);
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
  }

  /*Cycle Sort*/
  cycleSort() {
    const [animations, sortArray] = getCycleSortAnimations(this.state.array);
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
  }

  /*Counting Sort Might not work */
  //because counting sort do not compare array elements
  countingSort() {
    const [animations, sortArray] = getCountingSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        //const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //barTwoStyle.backgroundColor = color;
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
  }

  /*Radix SORT*/
  radixSort() {
    const [animations, sortArray] = getRadixSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        //const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //barTwoStyle.backgroundColor = color;
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
  }


  bucketSort() {
    const [animations, sortArray] = getBucketSortAnimations(this.state.array);
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
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.shellSort()}>Shell Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.cycleSort()}>Cycle Sort</button>
        <button onClick={() => this.countingSort()}>Counting Sort</button>
        <button onClick={() => this.radixSort()}>Radix Sort</button>
        <button onClick={() => this.bucketSort()}>Bucket Sort</button>
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

