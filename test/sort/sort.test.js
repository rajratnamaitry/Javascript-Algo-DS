import { describe, it, expect } from 'vitest'
import { bubbleSort, bubbleSort2, bubbleSortOpt } from '../../src/sort/bubble-sort';
// The two tests marked with concurrent will be run in parallel
const unSorted = [4, 20, 12, 10, 7, 9];
const sorted = [4, 7, 9, 10, 12, 20];
describe('sort', () => {
    describe('Bubble sort', () => {
        it('Unoptimized Bubble sort', () => {
            expect(bubbleSort(unSorted)).toEqual(sorted);
        })
        it('Alternative Bubble sort ', () => {
            expect(bubbleSort2(unSorted)).toEqual(sorted);
        })
        it('Optimized Bubble sort ', () => {
            expect(bubbleSortOpt(unSorted)).toEqual(sorted);
        })
    })
})