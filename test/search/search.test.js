import { describe, it, expect } from 'vitest'
import { binarySearch, binarySearchRef,binarySearchRec } from "../../src/search/binary-search"
import { stringSearch } from "../../src/search/string-search"
import { linearSearch } from "../../src/search/linear-search"
const sortedSet = [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637];
const findNum = 593; 
const index = 5;
describe('Binary Search', ()=>{
    it('Normal',()=>{
        expect(binarySearch(sortedSet,findNum)).toEqual(index)
    })
    it('Refactor',()=>{
        expect(binarySearchRef(sortedSet,findNum)).toEqual(index)
    })
    it('Recursive',()=>{
       // expect(binarySearchRec(sortedSet,findNum)).toEqual(index)
    })
})
describe('String Search', ()=>{
    it('Normal',()=>{
        expect(stringSearch("lorie loled", "lol")).toEqual(1)
    })
})
describe('Linear Search', ()=>{
    it('Normal',()=>{
        expect(linearSearch(sortedSet,findNum)).toEqual(5)
    })
})