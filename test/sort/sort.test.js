import { describe, it, expect } from 'vitest'
import { bubbleSort, bubbleSort2, bubbleSortOpt } from '../../src/sort/bubble-sort';
import { insertionSort, insertionSort2 } from '../../src/sort/insertion-sort';
import { mergeSort } from '../../src/sort/merge-sort';
import { quickSort, quickSortRec } from '../../src/sort/quick-sort';
import { radixSort , getDigit, digitCount ,mostDigits } from '../../src/sort/radix-sort';
import { selectionSort } from '../../src/sort/selection-sort';
const unSorted = [4, 20, 12, 10, 7, 9];
const sorted = [4, 7, 9, 10, 12, 20];
const unSortedBigNum = [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593];
const sortedBigNum = [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637];
describe('Sort', () => {
    describe('Bubble sort', () => {
        it('Unoptimized', () => {
            expect(bubbleSort(unSorted)).toEqual(sorted);
        })
        it('Alternative', () => {
            expect(bubbleSort2(unSorted)).toEqual(sorted);
        })
        it('Optimized', () => {
            expect(bubbleSortOpt(unSorted)).toEqual(sorted);
        })
    })
    describe('Insertion Sort',()=>{
        it('Unoptimized',()=>{
            expect(insertionSort(unSorted)).toEqual(sorted);
        })
        it('Alternative',()=>{
            expect(insertionSort2(unSorted)).toEqual(sorted);
        })
    })
    describe('Merge Sort',()=>{
        it('Normal',()=>{
            expect(mergeSort(unSorted,false)).toEqual(sorted);
        })
        it('Alternative',()=>{
            expect(mergeSort(unSorted,true)).toEqual(sorted);
        })
    })
    describe('Quick Sort',()=>{
        it('Normal',()=>{
            expect(quickSort(unSorted)).toEqual(sorted);
        })
        it('Recursive',()=>{
            expect(quickSortRec(unSorted)).toEqual(sorted);
        })
    })
    describe('Radix Sort',()=>{
        it('Helper - getDigit',()=>{
            expect(getDigit(12345, 0)).toEqual(5); 
            expect(getDigit(12345, 1)).toEqual(4); 
            expect(getDigit(12345, 2)).toEqual(3); 
            expect(getDigit(12345, 3)).toEqual(2); 
            expect(getDigit(12345, 4)).toEqual(1); 
            expect(getDigit(12345, 5)).toEqual(0); 
        })
        it('Helper - digitCount',()=>{
            expect(digitCount(1)).toEqual(1)
            expect(digitCount(9)).toEqual(1)
            expect(digitCount(25)).toEqual(2)
            expect(digitCount(314)).toEqual(3)
            expect(digitCount(1234)).toEqual(4)
            expect(digitCount(77777)).toEqual(5)
        })
        it('Helper - mostDigits',()=>{
            expect(mostDigits([1, 9, 10, 100, 99])).toEqual(3);
            expect(mostDigits([100, 1010, 1, 500])).toEqual(4);
            expect(mostDigits([0, 100000, 400, 12, 8])).toEqual(6);
            expect(mostDigits([])).toEqual(0)
        })
        it('big number sort',()=>{
            expect(radixSort(unSortedBigNum)).toEqual(sortedBigNum);
        })
    })
    describe('Selection sort',()=>{
        it('Normal',()=>{
            expect(selectionSort(unSorted)).toEqual(sorted);
        })
    })
})